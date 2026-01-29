import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">POS Admin</h2>

        <nav className="space-y-2">
          <Link to="/dashboard" className="block hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>
          <Link to="/kategori" className="block hover:bg-gray-700 p-2 rounded">
            Kategori
          </Link>
          <Link to="/produk" className="block hover:bg-gray-700 p-2 rounded">
            Produk
          </Link>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
