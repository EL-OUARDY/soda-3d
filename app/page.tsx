import Header from "@/components/Header";
import TextSplitter from "@/components/TextSplitter";
import Image from "next/image";
import cansImage from "@/public/img/cans.png";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 md:px-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center pt-10">
            {/* Hero section */}
            <div className="grid h-screen place-items-center">
              <div className="grid auto-rows-min place-items-center text-center">
                <h1 className="text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
                  <TextSplitter text={"LIVE GUTSY"} display="block" onlyWords />
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
            {/* .Hero section */}

            {/* All flavors */}
            <div className="text-side relative z-[10] grid h-screen items-center gap-4 md:grid-cols-2">
              <div>
                <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
                  <TextSplitter text={"Try all five flavors"} />
                </h2>
                <div className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance text-sky-950">
                  Our soda is made with real fruit juice and a touch of cane
                  sugar. We never use artificial sweeteners or high fructose
                  corn syrup. Try all five flavors and find your favorite!
                </div>
              </div>
              <div className="relative h-full w-full">
                <Image
                  src={cansImage}
                  alt="About Us"
                  fill
                  sizes="100vw"
                  quality={100}
                  priority
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            {/* .All flavors */}
          </div>
        </section>
      </main>
    </>
  );
}
