import { NextResponse } from 'next/server';

const dummyProducts = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Orange', category: 'Fruits' },
  { id: 3, name: 'Carrot', category: 'Vegetables' },
  { id: 4, name: 'Laptop', category: 'Electronics' },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ products: dummyProducts });
  }

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json({ products: filteredProducts });
}
