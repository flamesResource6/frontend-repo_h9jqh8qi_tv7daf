import { X } from "lucide-react";

export default function CartDrawer({ open, items, onClose }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-auto h-[calc(100%-180px)]">
          {items.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between border rounded-lg p-3">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg">Checkout</button>
        </div>
      </div>
    </div>
  );
}
