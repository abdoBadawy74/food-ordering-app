import MainHeading from "@/components/main-heading";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";

function BestSeller() {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      title: "Product 1",
      description: "Description of Product 1",
      basePrice: "29.99",
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Product 2",
      description: "Description of Product 2",
      basePrice: "39.99",
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Product 3",
      description: "Description of Product 3",
      basePrice: "49.99",
      image: "/assets/images/pizza.png",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subTitle="chekOut" title="Our Best Seller" />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bestSellers.map((product) => (
            <li key={product.id}>
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">{product.title}</h4>
                <span className="text-accent font-bold">
                  {formatCurrency(Number(product.basePrice))}
                </span>
              </div>
              <p className="text-gray-500 text-sm line-clamp-3">
                {product.description}
              </p>
              <Button className="block mx-auto my-3 rounded-full" >
                Add to Cart
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BestSeller;
