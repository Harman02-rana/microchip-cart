"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];

  addToCart: (
    product: CartItem
  ) => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;

  removeFromCart: (
    id: number
  ) => void;

  clearCart: () => void;

  total: number;
}

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] =
    useState<CartItem[]>([]);

  /* LOAD */

  useEffect(() => {

    const storedCart =
      localStorage.getItem("mc_cart");

    if (storedCart) {

      setCart(
        JSON.parse(storedCart)
      );
    }

  }, []);

  /* SAVE */

  useEffect(() => {

    localStorage.setItem(
      "mc_cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  /* ADD */

  function addToCart(
    product: CartItem
  ) {

    setCart((prev) => {

      const existing =
        prev.find(
          (item) =>
            item.id === product.id
        );

      if (existing) {

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  /* INCREASE */

  function increaseQuantity(
    id: number
  ) {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  }

  /* DECREASE */

  function decreaseQuantity(
    id: number
  ) {

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  }

  /* REMOVE */

  function removeFromCart(
    id: number
  ) {

    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  /* CLEAR */

  function clearCart() {

    setCart([]);
  }

  /* TOTAL */

  const total = cart.reduce(
    (acc, item) =>
      acc +
      item.price *
        item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {

  const context =
    useContext(CartContext);

  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}