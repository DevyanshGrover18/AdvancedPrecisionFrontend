import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBanner from "../TopBanner";
import { api } from "../../services/api";
import {  ArrowLeft } from "lucide-react";
import { extractRichText } from "../../utils/richText";

const normalizeProduct = (payload) => {
  if (!payload || Array.isArray(payload)) {
    return null;
  }

  if (payload.product && typeof payload.product === "object") {
    return payload.product;
  }

  if (payload.data?.product && typeof payload.data.product === "object") {
    return payload.data.product;
  }

  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) {
    return payload.data;
  }

  return payload;
};

const getProductDetailsMarkup = (product) => {
  const richDetails = extractRichText(product);

  if (typeof richDetails === "string" && richDetails.trim()) {
    return richDetails;
  }

  const description = product?.description ?? "";

  if (typeof description === "string" && description.trim()) {
    return `<p>${description}</p>`;
  }

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
        console.log(nextProduct)

        if (isMounted) {
          setProduct(nextProduct);
        }
      } catch (err) {
        if (isMounted) {
          setProduct(null);
          setError(
            err instanceof Error ? err.message : "Failed to load product."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <main className="min-h-screen bg-slate-50">
      <TopBanner title="Product Details" imageName="productBanner.jpeg" />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-12">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
         <ArrowLeft className="h-5" /> Back to Products
        </Link>

        {loading && (
          <div className="mt-6 animate-pulse">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="aspect-[4/3] w-full rounded-2xl bg-slate-200" />
              <div className="flex flex-col gap-4">
                <div className="h-8 w-3/4 rounded-lg bg-slate-200" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-5/6 rounded bg-slate-200" />
                  <div className="h-4 w-4/6 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
            {error}
          </div>
        )}

        {!loading && !error && product && (
          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name ?? "Product"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center text-sm font-medium text-slate-400">
                  No image available
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                {product.name ?? "Product"}
              </h1>

              <div
                className="rich-text-content mt-5 text-sm leading-7 text-slate-600 sm:text-base"
                dangerouslySetInnerHTML={{ __html: getProductDetailsMarkup(product) }}
              />
            </div>
          </div>
        )}

        {!loading && !error && !product && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            Product not found.
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductDetailPage;
