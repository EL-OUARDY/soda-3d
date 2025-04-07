import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero section */}
      <main>
        <section className="px-4 first:pt-10 md:px-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
            <div className="grid h-screen place-items-center">
              <div className="grid auto-rows-min place-items-center text-center">
                <h1 className="text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
                  LIVE GUTSY
                </h1>
                <div className="mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
                  Soda Perfected
                </div>
                <div className="text-2xl font-normal text-sky-950">
                  3-5g sugar. 9g fiber. 5 delicious flavors.
                </div>
                <button className="mt-12 cursor-pointer rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* .Hero section */}
      </main>
    </>
  );
}
