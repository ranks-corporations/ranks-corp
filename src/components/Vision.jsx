export default function Vision() {
  const items = [
    {
      title: "Innovation",
      text: "Exploring new technologies and opportunities."
    },
    {
      title: "Development",
      text: "Building software and digital products."
    },
    {
      title: "Growth",
      text: "Creating sustainable projects with long-term value."
    }
  ];

  return (
    <section className="py-24 px-6">

      <h2 className="section-title">
        Vision
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {items.map(item => (
          <div className="card" key={item.title}>
            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-zinc-400">
              {item.text}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}