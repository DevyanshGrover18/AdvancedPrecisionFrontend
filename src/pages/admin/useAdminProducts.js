import { useEffect, useState } from "react";
import { adminApi, getAdminToken } from "../../services/admin";

const normalizeProducts = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.data?.products)) {
    return payload.data.products;
  }

  if (Array.isArray(payload?.products)) {
    return payload.products;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
};

const useAdminProducts = () => {
  const token = getAdminToken();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }

    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await adminApi.get("/api/products", { token });
        if (isMounted) {
          setProducts(normalizeProducts(response));
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load products."
          );
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
  }, [token]);

  return { products, setProducts, loading, error, token };
};

export default useAdminProducts;
