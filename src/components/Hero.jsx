export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

      <img
        src="/ranks-corp-logo.png"
        alt="Ranks Corporation"
        className="w-40 mb-8 orange-glow"
       />

      <h1 className="text-6xl font-black mb-4">
        Ranks Corporation
      </h1>

      <p className="text-xl text-zinc-400 max-w-2xl">
        A Foundation for Future Ventures.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#about"
          className="bg-orange-500 px-6 py-3 rounded-xl font-semibold"
        >
          Explore
        </a>

        <a
          href="https://github.com/ranks-corporations"
          target="_blank"
          className="border border-orange-500 px-6 py-3 rounded-xl"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}