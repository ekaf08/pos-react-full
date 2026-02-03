import { useState } from "react";
import { Link } from "react-router-dom"; // untuk navigasi halaman
import {
  Layers,
  ShoppingCart,
  FileText,
  ChevronDown,
  ChevronRight,
  Package,
  Users,
  Tag,
  Wallet,
  X,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  // state untuk buka/tutup submenu
  const [openMenu, setOpenMenu] = useState(null);

  // fungsi toggle submenu
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      {/* OVERLAY (hanya tampil di mobile saat sidebar terbuka) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
    <aside
        className={`
            fixed top-0 left-0 z-40
            w-64 h-screen bg-white border-r
            transform transition-transform
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
        `}
    >
        {/* HEADER SIDEBAR */}
        <div className="p-4 flex justify-between items-center text-xl font-semibold text-blue-600">
          POS Admin

          {/* Tombol close (mobile only) */}
          <button className="md:hidden" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* MENU */}
        <nav className="px-3 text-sm">
          {/* ================= MASTER ================= */}
          <div>
            <button
              onClick={() => toggleMenu("master")}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <Layers size={18} />
                <span>Master</span>
              </div>
              {openMenu === "master" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {/* SUBMENU MASTER */}
            {openMenu === "master" && (
              <div className="ml-7 mt-1 space-y-1">
                {/* Link ke halaman Kategori */}
                <MenuItem
                  to="/kategori"
                  icon={<Tag size={16} />}
                  label="Kategori"
                  onClick={onClose}
                />

                <MenuItem
                  to="/barang"
                  icon={<Package size={16} />}
                  label="Barang"
                  onClick={onClose}
                />

                <MenuItem
                  to="/user"
                  icon={<Users size={16} />}
                  label="User"
                  onClick={onClose}
                />
              </div>
            )}
          </div>

          {/* ================= TRANSAKSI ================= */}
          <div className="mt-2">
            <button
              onClick={() => toggleMenu("transaksi")}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart size={18} />
                <span>Transaksi</span>
              </div>
              {openMenu === "transaksi" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenu === "transaksi" && (
              <div className="ml-7 mt-1 space-y-1">
                <MenuItem
                  to="/penjualan"
                  icon={<ShoppingCart size={16} />}
                  label="Penjualan"
                  onClick={onClose}
                />

                <MenuItem
                  to="/pengeluaran"
                  icon={<Wallet size={16} />}
                  label="Pengeluaran"
                  onClick={onClose}
                />
              </div>
            )}
          </div>

          {/* ================= LAPORAN ================= */}
          <div className="mt-2">
            <button
              onClick={() => toggleMenu("laporan")}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <FileText size={18} />
                <span>Laporan</span>
              </div>
              {openMenu === "laporan" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openMenu === "laporan" && (
              <div className="ml-7 mt-1 space-y-1">
                <MenuItem
                  to="/laporan-penjualan"
                  icon={<FileText size={16} />}
                  label="Laporan Penjualan"
                  onClick={onClose}
                />

                <MenuItem
                  to="/laporan-pengeluaran"
                  icon={<FileText size={16} />}
                  label="Laporan Pengeluaran"
                  onClick={onClose}
                />
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

/**
 * Komponen menu item
 * - to     : alamat route
 * - icon   : icon menu
 * - label  : teks menu
 * - onClick: biasanya untuk close sidebar di mobile
 */
function MenuItem({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 text-gray-700"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
