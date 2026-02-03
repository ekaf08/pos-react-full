import { Navigate } from "react-router-dom";

/**
 * =====================================
 * PROTECTED ROUTE
 * - Mengecek apakah user sudah login
 * - Jika belum → redirect ke /login
 * =====================================
 */
export default function ProtectedRoute({ children }) {
  // Ambil token dari localStorage
  const token = localStorage.getItem("token");

  // Jika tidak ada token → belum login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika ada token → boleh masuk
  return children;
}
