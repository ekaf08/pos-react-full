import { useState, useEffect } from "react";

/**
 * Modal untuk Tambah & Edit Kategori
 */
export default function KategoriModal({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // =============================
  // Isi form jika edit
  // =============================
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description || "");
    }
  }, [initialData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Kategori" : "Tambah Kategori"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ name, description, image });
          }}
          className="space-y-4"
        >
          {/* NAME */}
          <input
            type="text"
            placeholder="Nama kategori"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Deskripsi"
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* IMAGE */}
          <input
            type="file"
            className="w-full"
            onChange={(e) => setImage(e.target.files[0])}
          />

          {/* ACTION */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Batal
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
