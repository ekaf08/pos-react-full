import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

/**
 * AdminLayout
 * Template utama untuk semua halaman admin
 * children = konten halaman (Dashboard, Produk, dll)
 */
export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten kanan */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Isi halaman */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
