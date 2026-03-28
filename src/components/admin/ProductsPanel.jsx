import ProductCard from "./ProductCard";

const ProductsPanel = ({ products, loading, activeCount, onNewProduct, onEdit, onDelete }) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Products</h2>
          <p className="text-sm text-slate-500">
            Active: {activeCount} of {products.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onNewProduct}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#a4d145] hover:text-slate-900"
        >
          New Product
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[340px] animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:min-h-[380px] lg:min-h-[420px]"
            >
              <div className="aspect-[16/10] w-full bg-slate-200 sm:aspect-[4/3]" />
              <div className="space-y-3 p-4 sm:p-6">
                <div className="h-5 w-2/3 rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          No products yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id ?? product._id ?? product.name}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPanel;
