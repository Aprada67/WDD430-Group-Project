const products = [
  { id: 1, name: "Ceramic Bowl", price: 120, image: "/images/bowl1.jpg" },
  { id: 2, name: "Clay Plate", price: 80, image: "/images/plate1.jpg" },
  { id: 3, name: "Handmade Mug", price: 60, image: "/images/mug1.jpg" },
  { id: 4, name: "Decorative Vase", price: 200, image: "/images/vase1.jpg" },
];

export default function Popular() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Most Popular</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-text mb-2">${product.price.toFixed(2)}</p>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
              BUY NOW!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

