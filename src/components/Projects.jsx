export default function Projects() {
  const projects = [
    "Project Alpha",
    "Project Beta",
    "Project Gamma"
  ];

  return (
    <section className="py-24 px-6">

      <h2 className="section-title">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {projects.map(project => (
          <div className="card" key={project}>
            <h3 className="text-xl font-bold">
              {project}
            </h3>

            <p className="text-zinc-400 mt-2">
              Status: Planning
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}