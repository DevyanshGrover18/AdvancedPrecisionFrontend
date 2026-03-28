const ProductsSkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
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
  );
};

export default ProductsSkeletonGrid;
