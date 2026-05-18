"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
 const {
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();
const total = cart.reduce(
  (acc, item) =>
    acc + item.price * item.quantity,
  0
);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-zinc-400 text-xl">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between"
              >

                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <div className="text-green-400 mt-2">
  ₹{item.price}
</div>

<div className="flex items-center gap-4 mt-4">

  <button
    onClick={() =>
      decreaseQuantity(item.id)
    }
    className="bg-zinc-800 w-10 h-10 rounded-xl"
  >
    -
  </button>

  <span className="text-xl font-bold">
    {item.quantity}
  </span>

  <button
    onClick={() =>
      increaseQuantity(item.id)
    }
    className="bg-zinc-800 w-10 h-10 rounded-xl"
  >
    +
  </button>

</div>

                  </div>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                  className="bg-red-500 hover:bg-red-400 px-5 py-3 rounded-xl font-semibold"
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="border-t border-zinc-800 pt-8 flex items-center justify-between">

              <div className="text-3xl font-bold">
                Total: ₹{total}
              </div>

              <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-bold">
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}