import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBanner from "../TopBanner";
import { api } from "../../services/api";
import { ArrowLeft } from "lucide-react";
import { extractRichText } from "../../utils/richText";
import ServiceProvider from "./ServiceProviderComponent";

const normalizeProduct = (payload) => {
  if (!payload || Array.isArray(payload)) return null;
  if (payload.product && typeof payload.product === "object") return payload.product;
  if (payload.data?.product && typeof payload.data.product === "object") return payload.data.product;
  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) return payload.data;
  return payload;
};

const getProductDetailsMarkup = (product) => {
  const richDetails = extractRichText(product);
  if (typeof richDetails === "string" && richDetails.trim()) return richDetails;
  const description = product?.description ?? "";
  if (typeof description === "string" && description.trim()) return `<p>${description}</p>`;
  return "<p>No description available.</p>";
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      if (!id) {
        setProduct(null);
        setError("Product not found.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const response = await api.get(`/api/products/${id}`);
        const nextProduct = normalizeProduct(response);
        if (isMounted) setProduct(nextProduct);
      } catch (err) {
        if (isMounted) {
          setProduct(null);
          setError(err instanceof Error ? err.message : "Failed to load product.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();
    return () => { isMounted = false; };
  }, [id]);

  return (
    <main className="min-h-screen bg-white">
      <TopBanner title="Product Details" imageName="productBanner.jpeg" />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-12">
        {/* Back link */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        {/* Loading skeleton */}
        {loading && (
          <div className="mt-6 animate-pulse space-y-4">
            <div className="h-8 w-1/3 rounded-lg bg-slate-200" />
            <div className="flex gap-10">
              <div className="flex-1 space-y-3">
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
                <div className="h-4 w-4/6 rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-3/4 rounded bg-slate-200" />
              </div>
              <div className="w-[45%] aspect-[4/3] rounded-xl bg-slate-200" />
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
            {error}
          </div>
        )}

        {/* Product content */}
        {!loading && !error && product && (
          <div className="mt-6">
            {/* Product name */}
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {product.name ?? "Product"}
            </h1>

            {/* Text left, image right — matches reference layout */}
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              {/* Rich text content */}
              <div
                className="
                  rich-text-content flex-1 text-sm leading-7 text-slate-600 sm:text-base
                  [&_p]:mb-4
                  [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                  [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
                  [&_li]:text-slate-600
                  [&_strong]:font-semibold [&_strong]:text-slate-800
                  [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-2 [&_h2]:mt-4
                  [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mb-2
                "
                dangerouslySetInnerHTML={{ __html: getProductDetailsMarkup(product) }}
              />

              {/* Image — floats to the right */}
              {product.image && (
                <div className="w-full shrink-0 lg:w-[45%]">
                  <img
                    src={product.image}
                    alt={product.name ?? "Product"}
                    className="w-full rounded-xl object-cover shadow-md"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Not found */}
        {!loading && !error && !product && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            Product not found.
          </div>
        )}
      </section>

      <ServiceProvider />
    </main>
  );
};

export default ProductDetailPage;