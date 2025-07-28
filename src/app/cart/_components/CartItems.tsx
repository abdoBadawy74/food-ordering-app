"use client";

import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

function CartItems() {
    const cart = useAppSelector(selectCartItems)
    console.log(cart);
  return (
    <div>CartItems</div>
  )
}

export default CartItems