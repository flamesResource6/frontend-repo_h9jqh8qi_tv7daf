import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/products`).then(async r => {
      const data = await r.json()
      setProducts(data)
    }).catch(() => {
      setProducts([])
    })
  }, [])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.title === product.title)
      if (existing) {
        return prev.map(p => p.title === product.title ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cart.reduce((s,i)=>s+i.quantity,0)} onCartClick={() => setDrawerOpen(true)} />
      <Hero />

      <section id="shop" className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Shop Packaging Supplies</h2>
            <p className="text-gray-600">Best-selling essentials picked for you</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <ProductCard key={idx} product={p} onAdd={addToCart} />
          ))}
        </div>
      </section>

      <section id="about" className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Why choose us?</h3>
            <p className="text-gray-700">We provide durable, eco-friendly and cost-effective packaging tailored to your business needs, with fast shipping and reliable support.</p>
          </div>
          <ul className="md:col-span-2 grid sm:grid-cols-2 gap-4 text-gray-700">
            <li className="p-4 rounded-lg bg-white border">Bulk discounts and wholesale pricing</li>
            <li className="p-4 rounded-lg bg-white border">Custom printing and branding</li>
            <li className="p-4 rounded-lg bg-white border">Next-day dispatch on most items</li>
            <li className="p-4 rounded-lg bg-white border">Sustainable materials available</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-xl font-bold mb-4">Need bulk or custom packaging?</h3>
        <p className="text-gray-700 mb-4">Send us your requirements and we’ll respond with a tailored quote.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="grid md:grid-cols-3 gap-4 max-w-3xl">
          <input className="border rounded-lg px-4 py-3" placeholder="Your name" required />
          <input type="email" className="border rounded-lg px-4 py-3" placeholder="Email address" required />
          <input className="border rounded-lg px-4 py-3 md:col-span-2" placeholder="Company / Project" />
          <textarea className="border rounded-lg px-4 py-3 md:col-span-2" rows="4" placeholder="Tell us what you need: sizes, quantities, printing..." />
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg">Request Quote</button>
        </form>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} HNG PACKAGING SOLUTION. All rights reserved.</p>
          <a href="/test" className="text-sm text-gray-500 hover:text-gray-700">System status</a>
        </div>
      </footer>

      <CartDrawer open={drawerOpen} items={cart} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}

export default App
