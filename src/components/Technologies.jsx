export default function Technologies() {

  const tech = [
    "Java",
    "JavaFX",
    "JavaScript",
    "React",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Cybersecurity",
    "3d Modeling",
    "Poster Design"
  ];

  return (
    <section className="py-24 px-6">

      <h2 className="section-title">
        Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {tech.map(item => (
          <div
            key={item}
            className="bg-zinc-900 px-6 py-3 rounded-xl border border-zinc-800"
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}