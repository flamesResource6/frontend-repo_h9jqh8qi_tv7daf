import { ShoppingCart, PackageSearch } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold">H</div>
          <div className="leading-tight">
            <p className="font-extrabold text-gray-900">HNG PACKAGING</p>
            <p className="text-xs text-gray-500 -mt-0.5">SOLUTION</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#shop" className="hover:text-amber-700">Shop</a>
          <a href="#about" className="hover:text-amber-700">About</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </nav>
        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
          <ShoppingCart size={18} />
          <span className="text-sm font-semibold">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-amber-700 text-xs font-bold px-1.5 py-0.5 rounded shadow">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
