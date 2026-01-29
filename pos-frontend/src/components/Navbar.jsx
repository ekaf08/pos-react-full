/**
 * Navbar
 * Bar bagian atas admin
 */
export default function Navbar() {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="font-semibold">Dashboard</h1>

      {/* User info */}
      <div className="text-sm">
        Admin
      </div>
    </header>
  )
}
