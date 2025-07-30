"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getTotalAmount } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

function CheckOutForm() {
  const cart = useAppSelector(selectCartItems);
  const totalAmount = getTotalAmount(cart);
  return (
    cart &&
    cart.length > 0 && (
      <div className="grid gap-6 bg-gray-100 rounded-md p-4">
        <h2 className="text-lg font-semibold">Checkout</h2>
        <form>
          <div className="grid gap-1 mt-3">
            <Label htmlFor="phone" className="text-accent">
              Phone Number
            </Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              // className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="grid gap-1 mt-3">
            <Label htmlFor="street" className="text-accent">
              Street Address
            </Label>
            <Textarea
              id="street"
              name="street"
              placeholder="Enter your street address"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="grid gap-1">
              <Label htmlFor="postal-code" className="text-accent">
                Postal code
              </Label>
              <Input
                type="text"
                id="postal-code"
                placeholder="Enter postal code"
                name="postal-code"
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="city" className="text-accent">
                City
              </Label>
              <Input
                type="text"
                id="city"
                placeholder="Enter your City"
                name="city"
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="country" className="text-accent">
                Country
              </Label>
              <Input
                type="text"
                id="country"
                placeholder="Enter your country"
                name="country"
              />
            </div>
          </div>
          <Button className="h-10 w-full mt-4">
            Pay {formatCurrency(totalAmount)}
          </Button>
        </form>
      </div>
    )
  );
}

export default CheckOutForm;
