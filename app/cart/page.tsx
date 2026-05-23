"use client";

import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
    clearCart,
  } = useCart();

  return (
    <main
      className="
        min-h-screen
        bg-[#020817]
        px-6 py-10
      "
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-10">

          <h1
            className="
              text-4xl
              font-black
              text-white
              sm:text-5xl
            "
          >
            Shopping Cart
          </h1>

          <p
            className="
              mt-4
              text-base
              text-gray-400
              sm:text-lg
            "
          >
            Review your enterprise procurement order
          </p>

        </div>

        {/* EMPTY */}

        {cart.length === 0 && (

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-[#081225]
              p-16
              text-center
            "
          >

            <h2
              className="
                text-3xl
                font-black
                text-white
              "
            >
              Your cart is empty
            </h2>

            <p
              className="
                mt-4
                text-gray-400
              "
            >
              Add products to begin procurement
            </p>

          </div>

        )}

        {/* CONTENT */}

        {cart.length > 0 && (

          <div
            className="
              grid gap-8
              xl:grid-cols-[1fr_380px]
            "
          >

            {/* LEFT */}

            <div className="space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="
                    flex flex-col gap-6
                    rounded-3xl
                    border border-white/10
                    bg-[#081225]
                    p-6
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                  "
                >

                  {/* PRODUCT */}

                  <div
                    className="
                      flex flex-col gap-5
                      sm:flex-row
                      sm:items-center
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        flex h-28 w-28
                        items-center justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-cyan-400/10
                        to-blue-500/10
                        text-5xl
                        shrink-0
                      "
                    >
                      💾
                    </div>

                    {/* INFO */}

                    <div>

                      <p
                        className="
                          text-sm
                          text-cyan-400
                        "
                      >
                        Enterprise Hardware
                      </p>

                      <h2
                        className="
                          mt-2
                          text-2xl
                          font-bold
                          text-white
                        "
                      >
                        {item.title}
                      </h2>

                      <p
                        className="
                          mt-2
                          text-gray-400
                        "
                      >
                        Enterprise inventory available
                      </p>

                    </div>
                  </div>

                  {/* ACTIONS */}

                  <div
                    className="
                      flex flex-col gap-5
                      xl:items-end
                    "
                  >

                    <h3
                      className="
                        text-3xl
                        font-black
                        text-white
                      "
                    >
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </h3>

                    {/* QUANTITY */}

                    <div
                      className="
                        flex items-center gap-4
                      "
                    >

                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-xl
                          border border-white/10
                          bg-white/5
                          text-white
                          transition hover:bg-white/10
                        "
                      >
                        <Minus size={18} />
                      </button>

                      <span
                        className="
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-xl
                          border border-white/10
                          bg-white/5
                          text-white
                          transition hover:bg-white/10
                        "
                      >
                        <Plus size={18} />
                      </button>

                    </div>

                    {/* REMOVE */}

                    <button
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                      className="
                        flex items-center gap-2
                        text-red-400
                        transition hover:text-red-300
                      "
                    >

                      <Trash2 size={18} />

                      Remove

                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}

            <div
              className="
                sticky top-28
                h-fit w-full
                rounded-3xl
                border border-white/10
                bg-[#081225]
                p-8
              "
            >

              <h2
                className="
                  text-3xl
                  font-black
                  text-white
                "
              >
                Order Summary
              </h2>

              <div
                className="
                  mt-8
                  space-y-5
                "
              >

                <div
                  className="
                    flex items-center justify-between
                    text-gray-400
                  "
                >

                  <span>Items</span>

                  <span>
                    {cart.length}
                  </span>

                </div>

                <div
                  className="
                    flex items-center justify-between
                    text-gray-400
                  "
                >

                  <span>Subtotal</span>

                  <span>
                    $
                    {total.toLocaleString()}
                  </span>

                </div>

                <div
                  className="
                    border-t border-white/10
                    pt-5
                  "
                >

                  <div
                    className="
                      flex items-center justify-between
                    "
                  >

                    <span
                      className="
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      Total
                    </span>

                    <span
                      className="
                        text-3xl
                        font-black
                        text-cyan-400
                      "
                    >
                      $
                      {total.toLocaleString()}
                    </span>

                  </div>
                </div>
              </div>

              {/* BUTTONS */}

              <div
                className="
                  mt-10
                  space-y-4
                "
              >

                <button
                  className="
                    w-full
                    rounded-2xl
                    bg-cyan-400
                    py-4
                    text-lg
                    font-bold
                    text-black
                    transition hover:bg-cyan-300
                  "
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    py-4
                    text-lg
                    font-bold
                    text-white
                    transition hover:bg-white/10
                  "
                >
                  Clear Cart
                </button>

              </div>
            </div>
          </div>

        )}

      </div>
    </main>
  );
}