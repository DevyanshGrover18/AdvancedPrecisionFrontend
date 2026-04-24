const richTextFieldNames = [
  "details",
  "moreDetails",
  "content",
  "body",
  "html",
  "richText",
  "description",
];

export const stripHtml = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  if (typeof window !== "undefined" && typeof window.DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(value, "text/html");
    return (doc.body.textContent ?? "").trim();
  }

  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

export const extractRichText = (payload) => {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  for (const fieldName of richTextFieldNames) {
    const fieldValue = payload[fieldName];
    if (typeof fieldValue === "string" && fieldValue.trim()) {
      return fieldValue;
    }
  }

  for (const value of Object.values(payload)) {
    if (typeof value === "string" && /<\/?[a-z][\s\S]*>/i.test(value)) {
      return value;
    }
  }

  return "";
};

export const extractPlainText = (payload) => stripHtml(extractRichText(payload));
