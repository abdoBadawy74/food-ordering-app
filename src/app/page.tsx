import { db } from "@/lib/prisma";
import BestSeller from "./_components/BestSeller";
import Hero from "./_components/Hero";

export default async function Home() {
  const size = await db.extra.createMany({
    data: [
      {
        name: "BASIL",
        price: 1.5,
        productId: "fdgfhgfgfj",
      },
      {
        name: "CHEESE",
        price: 3,
        productId: "fdgfhgfgfj",
      },
      {
        name: "ONION",
        price: 3.2,
        productId: "fdgfhgfgfj",
      },
      
    ],
  });
  return (
    <main>
      <Hero />
      <BestSeller />
    </main>
  );
}
