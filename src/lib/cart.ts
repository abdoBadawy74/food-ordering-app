import { CartItem } from "@/redux/features/cart/cartSlice";

export const getCartQuantity = (cart: CartItem[]) =>{
  return cart.reduce((quantity, item) =>  item.quantity! + quantity, 0);
}

export const getItemQuantity = (cart: CartItem[], itemId: string) => {
  const cartItem = cart.find(item => item.id === itemId);
  return cartItem ? cartItem.quantity! : 0;
};