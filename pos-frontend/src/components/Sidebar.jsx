/**
 * Sidebar
 * Digunakan untuk navigasi menu admin POS
 */
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      {/* Judul aplikasi */}
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        POS ADMIN
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        <a className="block px-3 py-2 rounded hover:bg-gray-700">
          Dashboard
        </a>
        <a className="block px-3 py-2 rounded hover:bg-gray-700">
          Produk
        </a>
        <a className="block px-3 py-2 rounded hover:bg-gray-700">
          Transaksi
        </a>
      </nav>
    </aside>
  )
}
