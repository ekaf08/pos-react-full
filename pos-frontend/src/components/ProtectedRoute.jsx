import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
/**
 * ProtectedRoute
 * Mengecek apakah user sudah login
 */
export default function ProtectedRoute({ children }) {

  // ambil token dari localStorage
const { token } = useAuth();

  // jika belum login, arahkan ke login
  if (!token) {
    return <Navigate to="/" replace />
  }

  // jika sudah login, tampilkan halaman
  return children
}
