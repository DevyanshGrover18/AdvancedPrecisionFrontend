const AboutContent = ({ content }) => (
  <div className="lg:col-span-9 py-12 lg:pl-16">
    <div className="space-y-4">
      <h2 className="text-3xl text-primary font-bold mb-2">{content.title}</h2>
      <p className="text-xs uppercase tracking-[0.25em] text-secondary font-bold">
        {content.label}
      </p>
    </div>

    <div className="relative overflow-hidden group flex justify-center my-10 rounded-2xl">
      <img
        src={content.image}
        className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition"
        alt={content.label}
      />
    </div>

    <div className="space-y-4">
      {content.body.map((para) => (
        <p key={para} className="text-gray-600 text-md leading-relaxed">
          {para}
        </p>
      ))}
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {content.stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-gray-200 p-4">
          <div className="text-2xl font-black text-primary">{stat.value}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutContent;
