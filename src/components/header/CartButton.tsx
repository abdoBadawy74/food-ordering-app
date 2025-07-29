"use client";
import React from "react";
import Link from "../link";
import { Routes } from "@/constants/enums";
import { ShoppingCartIcon } from "lucide-react";
import { getCartQuantity } from "@/lib/cart";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

export default function CartButton() {
  const cart = useAppSelector(selectCartItems); // Get the cart items from the Redux store
  const cartQuantity = getCartQuantity(cart);

  return (
    <Link href={`/${Routes.CART}`}>
      <button className="block relative group">
        <span className="absolute -top-4 start-4 bg-primary text-white rounded-full w-5 h-5 text-sm">
          {cartQuantity}
        </span>
        <ShoppingCartIcon className="w-6 h-6 text-accent group-hover:text-primary duration-200 transition-colors" />
      </button>
    </Link>
  );
}
