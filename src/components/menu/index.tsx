import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product";


function Menu({ items }: { items: ProductWithRelations[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((product) => (
        <MenuItem key={product.id} item={product} />
      ))}
    </ul>
  );
}

export default Menu;
