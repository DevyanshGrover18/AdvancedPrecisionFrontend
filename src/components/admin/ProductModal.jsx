import RichTextEditor from "./RichTextEditor";

const ProductModal = ({
  open,
  editingId,
  form,
  saving,
  error,
  message,
  onClose,
  onSubmit,
  onReset,
  onFieldChange,
  onExtraFieldChange,
  onAddExtraField,
  onRemoveExtraField,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close modal overlay"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70"
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {editingId ? "Edit Product" : "Add Product"}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Update core fields and any extra fields here.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#a4d145] hover:text-slate-900"
          >
            Close
          </button>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </span>
              <input
                value={form.name}
                onChange={(event) => onFieldChange("name", event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
                placeholder="Product name"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Image URL
              </span>
              <input
                value={form.image}
                onChange={(event) => onFieldChange("image", event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
                placeholder="https://..."
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </span>
            <textarea
              value={form.description}
              onChange={(event) => onFieldChange("description", event.target.value)}
              className="min-h-32 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
              placeholder="Product description"
              required
            />
          </label>

          <div className="space-y-2">
            <div>
              <span className="mb-2 block text-sm font-medium text-slate-700">
                More Details
              </span>
              <p className="text-xs leading-5 text-slate-500">
                Add longer formatted content for specs, features, or notes.
              </p>
            </div>
            <RichTextEditor
              value={form.details}
              onChange={(html) => onFieldChange("details", html)}
              placeholder="Add rich text details..."
            />
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <input
              checked={form.isActive}
              onChange={(event) => onFieldChange("isActive", event.target.checked)}
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-[#a4d145] focus:ring-[#a4d145]"
            />
            <span className="text-sm font-medium text-slate-700">Active</span>
          </label>

          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                Extra Fields
              </h3>
              <button
                type="button"
                onClick={onAddExtraField}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416900]"
              >
                Add Field
              </button>
            </div>

            <div className="space-y-3">
              {form.extraFields.map((field, index) => (
                <div key={index} className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
                  <input
                    value={field.key}
                    onChange={(event) =>
                      onExtraFieldChange(index, "key", event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
                    placeholder="Field name"
                  />
                  <input
                    value={field.value}
                    onChange={(event) =>
                      onExtraFieldChange(index, "value", event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#a4d145] focus:ring-2 focus:ring-[#a4d145]/20"
                    placeholder="Value"
                  />
                  <button
                    type="button"
                    onClick={() => onRemoveExtraField(index)}
                    className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          {message ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {message}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {saving ? "Saving..." : editingId ? "Update Product" : "Create Product"}
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#a4d145] hover:text-slate-900"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
