const OverviewPanel = ({ products, activeCount }) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Total Products", value: products.length },
          { label: "Active Products", value: activeCount },
          { label: "Inactive Products", value: products.length - activeCount },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-3xl font-black text-slate-900">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Workspace</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use the sidebar to switch between dashboard sections. Products is the
            full CRUD area; overview and media provide quick context and previews.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Latest Media</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Preview of recent product imagery sourced from the product records.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.id ?? product._id ?? index}
                className="overflow-hidden rounded-2xl bg-slate-100"
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name ?? "Product media"}
                    className="h-32 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-32 items-center justify-center text-sm text-slate-400">
                    No image
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
