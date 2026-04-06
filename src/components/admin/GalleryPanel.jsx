import { Image as ImageIcon, Upload, Trash2 } from "lucide-react";

const formatFileSize = (size) => {
  if (!Number.isFinite(size)) {
    return "";
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${Math.round(size / 1024)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

const GalleryPanel = ({
  galleryItems,
  selectedFiles,
  uploading,
  error,
  message,
  onFileChange,
  onUpload,
  onDelete,
  onClearSelection,
  fileInputRef,
}) => {
  const selectedCount = selectedFiles.length;

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#50b8af]">
              Gallery Management
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
              Upload images
            </h2>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <form
          onSubmit={onUpload}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#50b8af]/15 text-[#50b8af]">
              <Upload size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Upload images</h3>
              <p className="text-sm text-slate-600">
                JPG, PNG, WebP, GIF, or SVG
              </p>
            </div>
          </div>

          <label
            htmlFor="gallery-upload"
            className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center transition hover:border-[#50b8af] hover:bg-[#ecf9f8]"
          >
            <ImageIcon className="mb-3 text-slate-400" size={28} />
            <span className="text-sm font-semibold text-slate-900">
              Choose gallery images
            </span>
            <span className="mt-1 text-xs text-slate-500">
              Select one file or up to ten at once
            </span>
          </label>

          <input
            id="gallery-upload"
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={onFileChange}
            className="hidden"
          />

          {selectedCount > 0 ? (
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-900">
                  Selected files
                </span>
                <button
                  type="button"
                  onClick={onClearSelection}
                  className="text-slate-500 transition hover:text-slate-900"
                >
                  Clear
                </button>
              </div>

              <div className="space-y-2">
                {selectedFiles.map((file) => (
                  <div
                    key={`${file.name}-${file.lastModified}`}
                    className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="truncate font-medium">{file.name}</span>
                      <span className="shrink-0 text-xs text-slate-500">
                        {formatFileSize(file.size)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-4 text-sm leading-6 text-slate-500">
              No files selected yet.
            </p>
          )}

          {error ? (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          {message ? (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={uploading || selectedCount === 0}
            className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {uploading ? "Uploading..." : "Upload to gallery"}
          </button>
        </form>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Images</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => {
              const key = item.id ?? item._id ?? item.image ?? item.resolvedImage;

              return (
                <article
                  key={key}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
                >
                  <div className="relative aspect-[4/3] bg-slate-100">
                    {item.resolvedImage ? (
                      <img
                        src={item.resolvedImage}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        No image available
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => onDelete(item)}
                      className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-rose-600 shadow-sm transition hover:bg-rose-50"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </article>
              );
            })}

            {!galleryItems.length ? (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                  <ImageIcon size={24} />
                </div>
                <h4 className="mt-4 text-lg font-bold text-slate-900">
                  No gallery images yet
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  Upload your first image on the left to populate the public
                  gallery page.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPanel;
