import { useState } from "react";
import ProductModal from "../../components/admin/ProductModal";
import ProductsPanel from "../../components/admin/ProductsPanel";
import { adminApi } from "../../services/admin";
import useAdminProducts from "./useAdminProducts";

const emptyExtraField = () => ({ key: "", value: "" });

const emptyForm = {
  name: "",
  description: "",
  image: "",
  details: "",
  isActive: true,
  extraFields: [emptyExtraField()],
};

const splitProductFields = (product) => {
  const coreKeys = new Set([
    "id",
    "_id",
    "name",
    "description",
    "image",
    "details",
    "isActive",
    "createdAt",
    "updatedAt",
    "__v",
  ]);

  return Object.entries(product ?? {})
    .filter(([key, value]) => !coreKeys.has(key) && value !== undefined)
    .map(([key, value]) => ({
      key,
      value:
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
          ? String(value)
          : JSON.stringify(value),
    }));
};

const buildPayload = (form) => {
  const payload = {
    name: form.name.trim(),
    description: form.description.trim(),
    image: form.image.trim(),
    details: form.details.trim(),
    isActive: Boolean(form.isActive),
  };

  form.extraFields.forEach(({ key, value }) => {
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    if (!trimmedKey || trimmedValue === "") {
      return;
    }

    if (["name", "description", "image", "details", "isActive"].includes(trimmedKey)) {
      return;
    }

    payload[trimmedKey] = trimmedValue;
  });

  return payload;
};

const Products = () => {
  const { products, setProducts, loading, error: loadError } = useAdminProducts();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [productModalOpen, setProductModalOpen] = useState(false);

  const activeCount = products.filter((product) => product.isActive !== false).length;

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const openCreateModal = () => {
    resetForm();
    setProductModalOpen(true);
    setError("");
    setMessage("");
  };

  const closeProductModal = () => {
    setProductModalOpen(false);
    setError("");
    setMessage("");
  };

  const handleFieldChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleExtraFieldChange = (index, field, value) => {
    setForm((current) => {
      const extraFields = [...current.extraFields];
      extraFields[index] = { ...extraFields[index], [field]: value };
      return { ...current, extraFields };
    });
  };

  const addExtraField = () => {
    setForm((current) => ({
      ...current,
      extraFields: [...current.extraFields, emptyExtraField()],
    }));
  };

  const removeExtraField = (index) => {
    setForm((current) => {
      const extraFields = current.extraFields.filter(
        (_, fieldIndex) => fieldIndex !== index
      );
      return {
        ...current,
        extraFields: extraFields.length ? extraFields : [emptyExtraField()],
      };
    });
  };

  const handleEdit = (product) => {
    setEditingId(product.id ?? product._id ?? null);
    setForm({
      name: product.name ?? "",
      description: product.description ?? "",
      image: product.image ?? "",
      details: product.details ?? product.moreDetails ?? "",
      isActive: product.isActive !== false,
      extraFields: splitProductFields(product),
    });
    setMessage("Editing product.");
    setError("");
    setProductModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (product) => {
    const productId = product.id ?? product._id;
    if (!productId) {
      setError("This product does not have an id.");
      return;
    }

    const confirmed = window.confirm(`Delete ${product.name ?? "this product"}?`);
    if (!confirmed) {
      return;
    }

    setSaving(true);
    setError("");
    setMessage("");

    try {
      await adminApi.delete(`/api/products/${productId}`);
      setProducts((current) =>
        current.filter((item) => (item.id ?? item._id) !== productId)
      );
      if (editingId === productId) {
        resetForm();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete product.");
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    const payload = buildPayload(form);

    try {
      let savedProduct;

      if (editingId) {
        savedProduct = await adminApi.put(`/api/products/${editingId}`, payload);
      } else {
        savedProduct = await adminApi.post("/api/products", payload);
      }

      const nextProduct =
        savedProduct?.product ??
        savedProduct?.data?.product ??
        savedProduct?.data ??
        savedProduct ??
        payload;

      setProducts((current) => {
        if (editingId) {
          return current.map((item) => {
            const itemId = item.id ?? item._id;
            return itemId === editingId ? nextProduct : item;
          });
        }

        return [nextProduct, ...current];
      });

      setMessage(editingId ? "Product updated." : "Product created.");
      resetForm();
      setProductModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save product.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {loadError ? (
        <div className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700 shadow-sm">
          {loadError}
        </div>
      ) : (
        <ProductsPanel
          products={products}
          loading={loading}
          activeCount={activeCount}
          onNewProduct={openCreateModal}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <ProductModal
        open={productModalOpen}
        editingId={editingId}
        form={form}
        saving={saving}
        error={error}
        message={message}
        onClose={closeProductModal}
        onSubmit={handleSubmit}
        onReset={resetForm}
        onFieldChange={handleFieldChange}
        onExtraFieldChange={handleExtraFieldChange}
        onAddExtraField={addExtraField}
        onRemoveExtraField={removeExtraField}
      />
    </>
  );
};

export default Products;
