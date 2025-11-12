export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400 text-sm">
        {product.image ? (
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        ) : (
          <span className="px-3 py-1 rounded bg-white border text-gray-500">No Image</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAdd(product)}
            className="text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 px-3 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
