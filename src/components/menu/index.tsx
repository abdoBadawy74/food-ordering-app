import MenuItem from "./MenuItem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Menu({ items }: { items: any }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((product) => (
        <MenuItem key={product.id} item={product} />
      ))}
    </ul>
  );
}

export default Menu;
