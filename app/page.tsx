import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Flavors from "@/components/Flavors";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 md:px-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center pt-10">
            <Hero />
            <Flavors />
          </div>
        </section>
      </main>
    </>
  );
}
