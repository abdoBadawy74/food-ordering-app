/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";

export default function MenuItem({ item }: { item: any }) {
  return (
    <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-48 h-48 mx-auto">
        <Image
          src={item.image}
          alt={item.name || "Menu Item"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <span className="text-accent font-bold">
          {formatCurrency(Number(item.basePrice))}
        </span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
      <AddToCartButton item={item} />
    </li>
  );
}
