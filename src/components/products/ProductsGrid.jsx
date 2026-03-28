import ProductCard from "./ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id ?? `${product.name}-${index}`} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
