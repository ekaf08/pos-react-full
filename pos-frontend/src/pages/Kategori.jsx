import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import api from "../api/axios";
import DashboardLayout from "../layouts/DashboardLayout";
import KategoriModal from "../components/KategoriModal";
import Notification from "../components/Notification";

export default function Kategori() {
  // =============================
  // STATE
  // =============================
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [notif, setNotif] = useState(null);

  // =============================
  // AMBIL DATA DARI API
  // =============================
  const fetchData = async () => {
    const res = await api.get("/categories");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // =============================
  // SIMPAN DATA (TAMBAH / EDIT)
  // =============================
  const handleSave = async (form) => {
    try {
      if (selected) {
        await api.put(`/categories/${selected.id}`, form);
        setNotif({ type: "success", message: "Kategori diperbarui" });
      } else {
        await api.post("/categories", form);
        setNotif({ type: "success", message: "Kategori ditambahkan" });
      }

      setModalOpen(false);
      setSelected(null);
      fetchData();
    } catch {
      setNotif({ type: "error", message: "Gagal menyimpan data" });
    }
  };

  // =============================
  // DEFINISI KOLOM TABLE
  // =============================
  const columns = [
    {
      header: "Nama",
      accessorKey: "name",
    },
    {
      header: "Deskripsi",
      accessorKey: "description",
    },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={() => {
              setSelected(row.original);
              setModalOpen(true);
            }}
          >
            Edit
          </button>

          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={async () => {
              if (!confirm("Hapus kategori?")) return;
              await api.delete(`/categories/${row.original.id}`);
              fetchData();
            }}
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];

  // =============================
  // INIT TANSTACK TABLE
  // =============================
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DashboardLayout>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Kategori</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Tambah
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border p-2 text-left">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border p-2">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      <KategoriModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelected(null);
        }}
        onSubmit={handleSave}
        initialData={selected}
      />

      {/* NOTIFIKASI */}
      {notif && (
        <Notification
          type={notif.type}
          message={notif.message}
          onClose={() => setNotif(null)}
        />
      )}
    </DashboardLayout>
  );
}
