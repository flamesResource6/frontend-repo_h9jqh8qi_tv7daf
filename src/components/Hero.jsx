import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-amber-600 font-semibold text-sm mb-3">Welcome to</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            HNG PACKAGING SOLUTION
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            High-quality packaging supplies for every business need. Boxes, bags, tapes, stretch films, and custom branding — fast, reliable, and affordable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#shop" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              <ShoppingCart size={20} /> Shop Products
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-6 py-3 rounded-lg transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-white shadow-2xl border border-amber-100 p-6">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="rounded-xl bg-amber-100" />
              <div className="rounded-xl bg-orange-100" />
              <div className="rounded-xl bg-rose-100" />
              <div className="rounded-xl bg-yellow-100" />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg border border-amber-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-700">
            Trusted by 1000+ businesses
          </div>
        </div>
      </div>
    </section>
  );
}
