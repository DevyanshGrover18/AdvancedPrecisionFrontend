import { useEffect, useRef, useState } from "react";
import GalleryPanel from "../../components/admin/GalleryPanel";
import {
  deleteGalleryImage,
  getGalleryImages,
  normalizeGalleryImages,
  uploadGalleryImages,
} from "../../services/gallery";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadGallery = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await getGalleryImages();
        if (isMounted) {
          setGalleryItems(normalizeGalleryImages(response));
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load gallery images.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadGallery();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files ?? []).slice(0, 10);
    setSelectedFiles(files);
    setMessage(files.length ? `${files.length} file(s) ready to upload.` : "");
    setError("");
  };

  const clearSelection = () => {
    setSelectedFiles([]);
    setMessage("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFiles.length) {
      setError("Select one or more images before uploading.");
      return;
    }

    setUploading(true);
    setError("");
    setMessage("");

    try {
      const response = await uploadGalleryImages(selectedFiles);
      const uploadedItems = normalizeGalleryImages(response);

      if (uploadedItems.length) {
        setGalleryItems((current) => [...uploadedItems, ...current]);
      } else {
        const refreshedResponse = await getGalleryImages();
        setGalleryItems(normalizeGalleryImages(refreshedResponse));
      }

      clearSelection();
      setMessage("Gallery images uploaded successfully.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload images.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (item) => {
    const id = item.id ?? item._id;
    if (!id) {
      setError("This gallery image does not have an id.");
      return;
    }

    const confirmed = window.confirm(
      `Delete ${item.title ?? "this gallery image"}?`,
    );

    if (!confirmed) {
      return;
    }

    setError("");
    setMessage("");

    try {
      await deleteGalleryImage(id);
      setGalleryItems((current) =>
        current.filter((galleryItem) => (galleryItem.id ?? galleryItem._id) !== id),
      );
      setMessage("Gallery image deleted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete image.");
    }
  };

  if (loading) {
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="h-6 w-44 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="h-96 animate-pulse rounded-[2rem] bg-slate-100" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[4/3] animate-pulse rounded-3xl bg-slate-100"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <GalleryPanel
      galleryItems={galleryItems}
      selectedFiles={selectedFiles}
      uploading={uploading}
      error={error}
      message={message}
      onFileChange={handleFileChange}
      onUpload={handleUpload}
      onDelete={handleDelete}
      onClearSelection={clearSelection}
      fileInputRef={fileInputRef}
    />
  );
};

export default Gallery;
