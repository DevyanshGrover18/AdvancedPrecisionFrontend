import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import TopBanner from "../components/TopBanner";
import { getGalleryImages, normalizeGalleryImages } from "../services/gallery";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-[#ecf9f8]">
      <TopBanner title="Gallery" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py12 lg:px-8">
        <div className="mt-2">
          {loading ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-80 w-80 animate-pulse rounded-sm bg-slate-100"
                />
              ))}
            </div>
          ) : galleryItems.length ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {galleryItems.map((item, index) => {
                const key = item.id ?? item._id ?? item.image ?? index;

                return (
                  <article
                    key={key}
                    className="group h-72 w-72 overflow-hidden border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.4s ease forwards`,
                      animationDelay: `${index * 60}ms`,
                    }}
                  >
                    {item.resolvedImage ? (
                      <img
                        src={item.resolvedImage}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-80 w-80 items-center justify-center bg-slate-100 text-slate-400">
                        <ImageIcon size={28} />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
