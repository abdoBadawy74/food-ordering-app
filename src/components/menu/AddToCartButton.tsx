"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { Checkbox } from "../ui/checkbox";
import { Extra, ProductSizes, Size } from "@/generated/prisma";
import { ProductWithRelations } from "@/types/product";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/features/cart/cartSlice";

function AddToCartButton({ item }: { item: ProductWithRelations }) {
  const cart = useAppSelector(selectCartItems); // Get the cart items from the Redux store
  // Find the default size from the cart or fallback to the first available size
  const defaultSize =
    cart.find((cartItem) => cartItem.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSizes.SMALL) ||
    null;
  // Find the default extras from the cart or fallback to an empty array
  const defaultExtras =
    cart.find((cartItem) => cartItem.id === item.id)?.extras || [];

  // Initialize the selected size state with the default size or the first available size
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize!);
  // Initialize the selected extras state with the default extras or an empty array
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtras!);


  let totalPrice = item.basePrice;

  if(selectedSize){
    totalPrice += selectedSize.price;
  }

  if(selectedExtras.length > 0) {
    for(const extra of selectedExtras) {
      totalPrice += extra.price;
    }
  }
  

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            type="button"
            size={"lg"}
            className="mt-4 text-white rounded-full !px-8 cursor-pointer block mx-auto"
          >
            <span>Add to Cart</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
          <DialogHeader className="flex items-center">
            <Image src={item.image} alt={item.name} width={200} height={200} />
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription className="text-center">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-10">
            <div className="space-y-4">
              <Label className="block text-center" htmlFor="pick-size">
                Pick your size
              </Label>
              <PickSize
                sizes={item.sizes}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>
            <div className="space-y-4">
              <Label className="block text-center" htmlFor="add-Extras">
                Any Extras ?
              </Label>
              <Extras
                extras={item.extras}
                selectedExtras={selectedExtras}
                setSelectedExtras={setSelectedExtras}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full h-10 ">
              Add To Cart {formatCurrency(totalPrice)}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddToCartButton;

function PickSize({
  sizes,
  item,
  selectedSize,
  setSelectedSize,
}: {
  sizes: Size[];
  item: ProductWithRelations;
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-200 p-4 rounded-md"
        >
          <RadioGroupItem
            value={selectedSize.name}
            checked={selectedSize.id === size.id}
            id={size.id}
            onClick={() => setSelectedSize(size)}
          />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function Extras({
  extras,
  selectedExtras,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  const handleExtra = (extra: Extra) => {
    // Check if the extra is already selected
    const isSelected = selectedExtras.find((e) => e.id === extra.id);
    if (isSelected) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };
  return extras.map((extra) => (
    <div
      key={extra.id}
      className="flex items-center space-x-2 border border-gray-200 p-4 rounded-md"
    >
      <Checkbox
        id={extra.id}
        checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
        onClick={() => handleExtra(extra)}
      />
      <Label
        htmlFor={extra.id}
        className="text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
    </div>
  ));
}
