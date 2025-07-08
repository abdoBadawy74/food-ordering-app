import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product";

function Menu({ items }: { items: ProductWithRelations[] }) {
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((product) => (
        <MenuItem key={product.id} item={product} />
      ))}
    </ul>
  ) : (
    <div className="text-center text-gray-500">
      <p>No products found !</p>
    </div>
  );
}

export default Menu;
