const ProductCard = ({ product }) => {
  const title = product.name ?? "Product";
  const desc = product.description ?? "No description available.";
  const img = product.image;

  return (
    <article className="flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[380px] lg:min-h-[420px]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 sm:aspect-[4/3]">
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-400">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3">{desc}</p>
      </div>
    </article>
  );
};

export default ProductCard;
