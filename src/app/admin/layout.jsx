export const metadata = {
    title: 'Admin Panel',
    description: 'Manage your grocery site efficiently.',
  };
  
  export default function AdminLayout({ children }) {
    return (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6">
          <nav className="space-y-4">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
            <a href="/admin/dashboard" className="block hover:text-blue-400">
              Dashboard
            </a>
            <a href="/admin/products" className="block hover:text-blue-400">
              Products
            </a>
            <a href="/admin/orders" className="block hover:text-blue-400">
              Orders
            </a>
            <a href="/admin/users" className="block hover:text-blue-400">
              Users
            </a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-grow bg-gray-100 p-6">{children}</main>
      </div>
    );
  }
  