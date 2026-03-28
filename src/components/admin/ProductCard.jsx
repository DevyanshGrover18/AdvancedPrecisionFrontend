const ProductCard = ({ product, onEdit, onDelete }) => {
  const title = product.name ?? "Product";
  const desc = product.description ?? "No description available.";
  const img = product.image;
  const isActive = product.isActive !== false;

  return (
    <article
      className={`flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[380px] lg:min-h-[420px] ${
        isActive ? "border-slate-200" : "border-slate-200 opacity-60 grayscale"
      }`}
    >
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
        <div className="mb-2 inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          {isActive ? "Active" : "Inactive"}
        </div>
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3">{desc}</p>

        <div className="mt-5 flex gap-3 pt-4">
          <button
            type="button"
            onClick={() => onEdit(product)}
            className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:border-[#a4d145] hover:text-[#0f172a]"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(product)}
            className="rounded-xl border border-rose-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700 transition hover:bg-rose-50"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
