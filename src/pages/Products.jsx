import { useEffect, useState } from "react";
import TopBanner from "../components/TopBanner";
import ProductsGrid from "../components/products/ProductsGrid";
import ProductsPageHeader from "../components/products/ProductsPageHeader";
import ProductsSkeletonGrid from "../components/products/ProductsSkeletonGrid";
import { api } from "../services/api";

const normalizeProducts = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.products)) {
    return payload.products;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await api.get("/api/products");
        const nextProducts = normalizeProducts(response);

        if (isMounted) {
          setProducts(nextProducts.filter((product) => product.isActive !== false));
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load products."
          );
          setProducts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <TopBanner title="Products" />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-12">
        <ProductsPageHeader />

        {loading ? (
          <ProductsSkeletonGrid />
        ) : error ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
            {error}
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No products found.
          </div>
        ) : (
          <ProductsGrid products={products} />
        )}
      </section>
    </main>
  );
};

export default ProductsPage;
