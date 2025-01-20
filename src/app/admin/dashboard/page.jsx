export default function Dashboard() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Total Products</h2>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">58</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">300</p>
          </div>
        </div>
      </div>
    );
  }
  