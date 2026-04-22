import { api } from "./api";
import { adminApi } from "./admin";

const DEFAULT_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:800";

const getBaseUrl = () => String(DEFAULT_API_BASE_URL).replace(/\/+$/, "");

const isAbsoluteUrl = (value) =>
  /^https?:\/\//i.test(value) || /^data:/i.test(value) || /^blob:/i.test(value);

export const resolveGalleryImageUrl = (value) => {
  if (!value) {
    return "";
  }

  if (isAbsoluteUrl(value)) {
    return value;
  }

  const normalizedPath = String(value).startsWith("/") ? value : `/${value}`;
  return `${getBaseUrl()}${normalizedPath}`;
};

const normalizeGalleryItems = (payload) => {
  const candidates = [
    payload,
    payload?.data,
    payload?.data?.gallery,
    payload?.data?.images,
    payload?.data?.image,
    payload?.data?.galleryImage,
    payload?.gallery,
    payload?.images,
    payload?.image,
    payload?.galleryImage,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }

    if (
      candidate &&
      typeof candidate === "object" &&
      !Array.isArray(candidate) &&
      ("image" in candidate ||
        "url" in candidate ||
        "imageUrl" in candidate ||
        "path" in candidate ||
        "location" in candidate ||
        "_id" in candidate ||
        "id" in candidate)
    ) {
      return [candidate];
    }
  }

  return [];
};

export const normalizeGalleryImage = (item, index = 0) => {
  if (typeof item === "string") {
    return {
      id: item,
      image: item,
      resolvedImage: resolveGalleryImageUrl(item),
      title: `Image ${index + 1}`,
      description: "",
      createdAt: null,
      raw: item,
    };
  }

  const image =
    item?.image ??
    item?.imageUrl ??
    item?.url ??
    item?.path ??
    item?.location ??
    item?.src ??
    "";

  const id =
    item?.id ??
    item?._id ??
    item?.uuid ??
    item?.imageId ??
    item?.publicId ??
    image ??
    `gallery-${index}`;

  return {
    ...item,
    id,
    image,
    resolvedImage: resolveGalleryImageUrl(image),
    title:
      item?.title ??
      item?.name ??
      item?.caption ??
      item?.originalName ??
      item?.filename ??
      item?.fileName ??
      `Image ${index + 1}`,
    description: item?.description ?? item?.alt ?? "",
    createdAt: item?.createdAt ?? item?.created_at ?? item?.uploadedAt ?? null,
  };
};

export const normalizeGalleryImages = (response) => {
  const items = response?.images ?? response?.data ?? response ?? [];
  return Array.isArray(items)
    ? items.map((item) => ({
        ...item,
        id: item.id ?? item._id,
        resolvedImage: item.resolvedImage ?? item.url ?? item.image ?? "",
      }))
    : [];
};

export const getGalleryImages = async () => {
  return api.get("/api/gallery");
};

export const uploadGalleryImages = async (files) => {
  const selectedFiles = Array.from(files ?? [])
    .filter(Boolean)
    .slice(0, 10);

  if (!selectedFiles.length) {
    throw new Error("Select at least one image to upload.");
  }

  const formData = new FormData();

  if (selectedFiles.length === 1) {
    formData.append("image", selectedFiles[0]);
  } else {
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });
  }

  return adminApi.post("/api/gallery", formData);
};

export const deleteGalleryImage = async (id) => {
  if (!id) {
    throw new Error("A gallery image id is required.");
  }

  return adminApi.delete(`/api/gallery/${id}`);
};
