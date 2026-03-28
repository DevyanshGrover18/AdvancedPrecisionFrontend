import OverviewPanel from "../../components/admin/OverviewPanel";
import useAdminProducts from "./useAdminProducts";

const Overview = () => {
  const { products, loading, error } = useAdminProducts();
  const activeCount = products.filter((product) => product.isActive !== false).length;

  if (loading) {
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="h-6 w-40 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 h-24 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700 shadow-sm">
        {error}
      </div>
    );
  }

  return (
    <OverviewPanel
      products={products}
      activeCount={activeCount}
    />
  );
};

export default Overview;
