import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";

function BestSeller() {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      title: "Product 1",
      description: "Description of Product 1",
      basePrice: 12,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Product 2",
      description: "Description of Product 2",
      basePrice: 29.99,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Product 3",
      description: "Description of Product 3",
      basePrice: 49.99,
      image: "/assets/images/pizza.png",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subTitle="chekOut" title="Our Best Seller" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSeller;
