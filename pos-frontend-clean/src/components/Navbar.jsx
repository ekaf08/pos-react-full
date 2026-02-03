import { useNavigate } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";

/**
 * NAVBAR ADMIN
 */
export default function Navbar({ onOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Hamburger (mobile only) */}
      <button
        className="md:hidden text-gray-700"
        onClick={onOpen}
      >
        <Menu size={22} />
      </button>

      <h1 className="text-lg font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-red-600 hover:text-red-700"
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
}
