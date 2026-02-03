import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

/**
 * =====================================
 * HALAMAN LOGIN
 * =====================================
 */
export default function Login() {
  // ================================
  // STATE FORM
  // ================================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /**
   * ================================
   * HANDLE LOGIN
   * ================================
   */
  const handleLogin = async (e) => {
    e.preventDefault(); // cegah reload halaman
    setError("");
    setLoading(true);

    try {
      // Kirim data login ke Laravel
      const response = await api.post("/login", {
        email,
        password,
      });

      /**
       * RESPONSE HARUS SEPERTI INI:
       * {
       *   token: "xxxxx"
       * }
       */
      const token = response.data.token;

      // Simpan token ke localStorage
      localStorage.setItem("token", token);

      // Redirect ke dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Email atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h1 className="text-xl font-bold mb-4 text-center">
          Login Admin
        </h1>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        {/* Email */}
        <input
          type="email"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          className="w-full border p-2 mb-4 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
