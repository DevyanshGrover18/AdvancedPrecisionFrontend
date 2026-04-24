import RichTextEditor from "./RichTextEditor";

const ProductModal = ({
  open,
  editingId,
  form,
  saving,
  error,
  message,
  selectedImageFile,
  imageUploading,
  onClose,
  onSubmit,
  onReset,
  onFieldChange,
  onImageFileChange,
  onUploadImage,
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
            className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#50b8af] hover:text-slate-900"
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
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#50b8af] focus:ring-2 focus:ring-[#50b8af]/20"
                placeholder="Product name"
                required
              />
            </label>

            <div className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Product Image
              </span>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={onImageFileChange}
                  className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-[#50b8af] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#3fa79f]"
                />

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onUploadImage}
                    disabled={imageUploading || !selectedImageFile}
                    className="rounded-xl bg-[#50b8af] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3fa79f] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {imageUploading ? "Uploading..." : "Upload Image"}
                  </button>
                  <button
                    type="button"
                    onClick={() => onFieldChange("image", "")}
                    className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#50b8af] hover:text-slate-900"
                  >
                    Clear
                  </button>
                </div>

                <div className="mt-4 space-y-2">
                  {selectedImageFile ? (
                    <p className="text-xs text-slate-500">
                      Selected file: {selectedImageFile.name}
                    </p>
                  ) : null}

                  {form.image ? (
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <img
                        src={form.image}
                        alt="Product preview"
                        className="h-40 w-full object-cover"
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">
                      Upload an image to populate the product image URL.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Description
              </span>
              <p className="text-xs leading-5 text-slate-500">
                Add longer formatted content for specs, features, or notes.
              </p>
            </div>
            <RichTextEditor
              value={form.description}
              onChange={(html) => onFieldChange("description", html)}
              placeholder="Add rich text details..."
            />
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <input
              checked={form.isActive}
              onChange={(event) => onFieldChange("isActive", event.target.checked)}
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-[#50b8af] focus:ring-[#50b8af]"
            />
            <span className="text-sm font-medium text-slate-700">Active</span>
          </label>


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
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#50b8af] hover:text-slate-900"
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
