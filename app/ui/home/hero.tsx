export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/hero-pottery.jpg"
        alt="Pottery in progress"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          Discover the Art of Handmade Pottery
        </h1>
      </div>
    </section>
  );
}
