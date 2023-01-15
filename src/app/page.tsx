import Header from "./Components/header";
import Hero from "./Components/hero";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll bg-background z-0">
      <Header />
      <section className="snap-center">
        <Hero />
      </section>
    </main>
  );
}
