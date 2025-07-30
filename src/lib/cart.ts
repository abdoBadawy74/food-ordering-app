import { CartItem } from "@/redux/features/cart/cartSlice";

export const getCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((quantity, item) => item.quantity! + quantity, 0);
};

export const getItemQuantity = (cart: CartItem[], itemId: string) => {
  const cartItem = cart.find((item) => item.id === itemId);
  return cartItem ? cartItem.quantity! : 0;
};

export const getSubtotal = (cart: CartItem[]) => {
  return cart.reduce((total, item) => {
    // item.basePrice + item.size.price + extras price
    const extrasTotal =
      item.extras?.reduce((sum, extra) => sum + extra.price, 0) || 0;

    const itemTotal = item.basePrice + (item.size?.price || 0) + (extrasTotal || 0);
    return total + itemTotal * item.quantity!;
  }, 0);
};

export const deliveryFee = 5; 

export const getTotalAmount = (cart: CartItem[]) => {
  const subtotal = getSubtotal(cart);
  return subtotal + deliveryFee;
};