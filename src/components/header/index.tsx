import { Routes } from "@/constants/enums";
import Link from "../link";
import React from "react";
import Navbar from "./Navbar";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between py-4">
        <Link href={Routes.ROOT} className="text-2xl font-semibold text-primary">
          🍕 Pizza
        </Link>
        <Navbar />

        <CartButton /> 
      </div>
    </header>
  );
}
