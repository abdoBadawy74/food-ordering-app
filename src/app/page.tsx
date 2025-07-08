import { db } from "@/lib/prisma";
import BestSeller from "./_components/BestSeller";
import Hero from "./_components/Hero";

export default async function Home() {
  await db.size.deleteMany();
  await db.extra.deleteMany();
  await db.product.deleteMany();
  return (
    <main>
      <Hero />
      <BestSeller />
    </main>
  );
}
