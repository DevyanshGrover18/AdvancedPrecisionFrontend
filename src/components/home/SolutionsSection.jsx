import React from "react";

const IMG1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBC71zPIsZnYCkzNn7LBMk6QD6o0AQY0EudKWmHQqjTYe5Nc8TQKWKrJ1qOL2Ngm1qi0t2xZNncZnjzQ3QqsKlTTISJqGETph5IcVyAgPQl_KG2DAHKcCKpRmQXRwIRkTDpJHOI5N3wF88spgX4DzLFBKoktkEXZS5_6PjmLBusiuHBxgqweMPeS6OUaYXx-jXq0XHzUvANn9xs7KAJWfpAs_Kbjh--OabpMBV8vUtLZY7k5Bin8y3kpCUYv41xGz_K2b-hZtITj8Ye";
const IMG2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkqkI0G1oq0KtslAWSt7YKMHHldzZsVfGVjZGhlxCgVojUxy7Uk75ApQ3PVsizNs-UuMiy09iwqts6M34t-ItpvstTf710rW8mMFT3ix_zUUyiDd-AzjifvKAaDGPcjVuqTOc0UjwQw9huY5mYR4oGpDkxoL6L6VIg1jWNMsMbwIXJvWVD4VlQv8AAjEsAdla68TbFnZ2QCfICTItcFZPXITYLVJgDSTxM6oa7LDXGXtq1-c4nDH04v1399HJRXwE5j7tMrN9wyo2";

const stats = [
  { value: "15000+", label: "Molds Delivered" },
  { value: "0.01mm", label: "Precision Tolerance" },
];

const SolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-5 lg:space-y-6">
          <h2 className="text-secondary text-sm font-bold uppercase tracking-[1px]">
            About us
          </h2>
          <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase">
            Driven by Engineering. Defined by Precision.
          </h3>
          <p className="text-primary dark:text-slate-400 text-base md:text-lg leading-relaxed">
            We are a specialized manufacturing company focused on delivering
            high-quality mold solutions for diverse industrial applications. With
            a commitment to precision engineering and continuous innovation, we
            help businesses achieve consistent production and superior product
            quality.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-3 md:p-4 border-l-4 border-[#a4d145] rounded-r-xl"
              >
                <p className="text-xl md:text-2xl text-primary font-bold">
                  {s.value}
                </p>
                <p className="text-xs md:text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
          <div
            className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
            style={{ backgroundImage: `url('${IMG1}')` }}
          />
          <div
            className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-cover bg-center mt-6 md:mt-8"
            style={{ backgroundImage: `url('${IMG2}')` }}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;