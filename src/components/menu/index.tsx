import { Product } from "@/generated/prisma";
import MenuItem from "./MenuItem";


function Menu({ items }: { items: Product[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((product) => (
        <MenuItem key={product.id} item={product} />
      ))}
    </ul>
  );
}

export default Menu;
