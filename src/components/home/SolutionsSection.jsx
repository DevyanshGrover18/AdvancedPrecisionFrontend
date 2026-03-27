import React from "react";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBC71zPIsZnYCkzNn7LBMk6QD6o0AQY0EudKWmHQqjTYe5Nc8TQKWKrJ1qOL2Ngm1qi0t2xZNncZnjzQ3QqsKlTTISJqGETph5IcVyAgPQl_KG2DAHKcCKpRmQXRwIRkTDpJHOI5N3wF88spgX4DzLFBKoktkEXZS5_6PjmLBusiuHBxgqweMPeS6OUaYXx-jXq0XHzUvANn9xs7KAJWfpAs_Kbjh--OabpMBV8vUtLZY7k5Bin8y3kpCUYv41xGz_K2b-hZtITj8Ye";
const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkqkI0G1oq0KtslAWSt7YKMHHldzZsVfGVjZGhlxCgVojUxy7Uk75ApQ3PVsizNs-UuMiy09iwqts6M34t-ItpvstTf710rW8mMFT3ix_zUUyiDd-AzjifvKAaDGPcjVuqTOc0UjwQw9huY5mYR4oGpDkxoL6L6VIg1jWNMsMbwIXJvWVD4VlQv8AAjEsAdla68TbFnZ2QCfICTItcFZPXITYLVJgDSTxM6oa7LDXGXtq1-c4nDH04v1399HJRXwE5j7tMrN9wyo2";

const stats = [
  { value: "1500+", label: "Molds Delivered" },
  { value: "0.01mm", label: "Precision Tolerance" },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-secondary text-sm font-bold uppercase tracking-[1px]">
            About us
          </h2>
          <h3 className="text-primary text-4xl md:text-4xl font-bold uppercase">
            Advanced Precision Solutions
          </h3>
          <p className="text-primary dark:text-slate-400 text-lg leading-relaxed">
            Specializing in high-quality single-stage molds for PET, PP, PC, and
            various other technical polymers. Our engineering prowess ensures
            optimal cycle times, material distribution, and unmatched durability
            for high-volume production.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-4 border-l-4 border-[#a4d145] rounded-r-xl"
              >
                <p className="text-2xl text-primary font-bold">
                  {s.value}
                </p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div
            className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
            style={{ backgroundImage: `url('${IMG1}')` }}
          />
          <div
            className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-cover bg-center mt-8"
            style={{ backgroundImage: `url('${IMG2}')` }}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;