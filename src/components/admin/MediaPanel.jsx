const MediaPanel = ({ products }) => {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Media Library</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          This can later connect to file uploads. For now it surfaces existing
          product images and keeps the admin layout ready for expansion.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id ?? product._id ?? product.name}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="aspect-[4/3] bg-slate-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name ?? "Media item"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  No image
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">
                {product.name ?? "Product"}
              </h3>
              <p className="mt-1 text-sm text-slate-600">Linked media asset</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPanel;
