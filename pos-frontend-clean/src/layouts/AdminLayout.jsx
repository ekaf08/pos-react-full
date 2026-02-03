import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= Sidebar ================= */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ================= Main Content ================= */}
      <div className="md:ml-64"> {/* ⬅️ INI KUNCI: geser konten setelah sidebar */}
        <Navbar onOpen={() => setSidebarOpen(true)} />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
