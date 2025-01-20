export default function Products() {
    const products = [
      { id: 1, name: 'Apple', price: '$2', stock: 50 },
      { id: 2, name: 'Milk', price: '$1', stock: 30 },
      { id: 3, name: 'Bread', price: '$3', stock: 20 },
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-4">{product.id}</td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  