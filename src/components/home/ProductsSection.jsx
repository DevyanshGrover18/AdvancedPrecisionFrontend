import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

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

  if (Array.isArray(payload?.data?.products)) {
    return payload.data.products;
  }

  return [];
};

const resolveImage = (product) =>
  product?.image ??
  product?.imageUrl ??
  product?.url ??
  product?.src ??
  "";

const resolveTitle = (product, index) =>
  product?.name ??
  product?.title ??
  product?.productName ??
  `Product ${index + 1}`;

const resolveDescription = (product) =>
  product?.description ??
  product?.shortDescription ??
  product?.details ??
  "";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await api.get("/api/products");
        const nextProducts = normalizeProducts(response).filter(
          (product) => product.isActive !== false,
        );

        if (isMounted) {
          setProducts(nextProducts);
          setActive(0);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load products.",
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

  const visibleProducts = useMemo(() => products.slice(0, 4), [products]);
  const product = visibleProducts[active] ?? null;

  const handleTabChange = (i) => {
    if (i === active || i < 0 || i >= visibleProducts.length) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-16 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-secondary text-3xl text-center font-bold uppercase">
            Products
          </h2>
        <h3 className="text-sm text-center font-medium text-primary mt-3">
            {loading
              ? "Loading products from the backend..."
              : error
                ? error
                : "We offer a variety of high quality molds for Single Stage ISBM for the manufacturing of PET, PP, PC, PETG and TRITAN bottles. We provide better mold matrix optimization which results in increased volume production of containers."}
        </h3>
        </div>

        {!loading && !error && visibleProducts.length > 0 ? (
          <div className="flex flex-wrap gap-4 mb-12 mx-auto justify-center">
            {visibleProducts.map((p, i) => (
              <button
                key={p.id ?? p._id ?? p.name ?? p.title ?? i}
                onClick={() => handleTabChange(i)}
                className={`px-3 py-2 border-primary rounded cursor-pointer text-sm font-m transition-all duration-300 relative ${
                  active === i
                    ? "text-primary border bg-primary/40 scale-105"
                    : "text-gray-500 hover:text-black hover:scale-105"
                }`}
              >
                {resolveTitle(p, i)}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    active === i ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        ) : null}

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          {product ? (
            <div
              className={`w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden transition-all duration-300 ${
                animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${resolveImage(product)}')` }}
              />
            </div>
          ) : (
            <div className="w-full h-[350px] md:h-[450px] rounded-2xl bg-slate-100" />
          )}

          {/* TEXT */}
          <div
            className={`space-y-6 transition-all duration-300 ${
              animating
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            <h4 className="text-3xl md:text-4xl font-medium text-primary">
              {product ? resolveTitle(product, active) : "Products"}
            </h4>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              {product ? resolveDescription(product) : "No products available right now."}
            </p>

            <button onClick={()=>navigate('/products')} className="inline-flex cursor-pointer items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-normal hover:bg-[#3fa79f] hover:gap-4 transition-all duration-300">
              Explore More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
