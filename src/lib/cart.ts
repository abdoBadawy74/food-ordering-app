import { CartItem } from "@/redux/features/cart/cartSlice";

export const getCartQuantity = (cart: CartItem[]) =>{
  return cart.reduce((quantity, item) =>  item.quantity! + quantity, 0);
}