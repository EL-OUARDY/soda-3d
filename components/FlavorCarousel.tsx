import { useRef, useState } from "react";
import { Center, Environment, View } from "@react-three/drei";
import { Group } from "three";
import FloatingCan from "./FloatingCan";
import { FLAVORS } from "@/shared/flavor";
import { WavyCircles } from "./WavyCircles";
import gsap from "gsap";
import ArrowButton from "./ui/ArrowButton";

// Constants
const SPINS_ON_CHANGE = 8;

function FlavorCarousel() {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const sodaCanRef = useRef<Group>(null);

  function changeFlavor(index: number) {
    if (!sodaCanRef.current) return;

    // Calculate the next flavor index with wrapping
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    // Create a new GSAP timeline for animation sequencing
    const tl = gsap.timeline({
      onStart: () => setIsRotating(true),
      onComplete: () => setIsRotating(false),
    });

    // Rotate the can multiple times based on direction of flavor change
    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0,
    )
      // Animate background and circle colors to match new flavor
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      )
      // Fade out text elements
      .to(".soda-flavor, .soda-price", { duration: 0.2, y: -10, opacity: 0 }, 0)
      // Update state halfway through the animation
      .to({}, { onStart: () => setCurrentFlavorIndex(nextIndex) }, 0.5)
      // Fade in text elements with new flavor info
      .to(".soda-flavor", { duration: 0.2, y: 0, opacity: 1 }, 0.7)
      .to(".soda-price", { duration: 0.2, y: 0, opacity: 0.7 }, 0.75);
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <WavyCircles className="absolute top-0 left-0 size-full scale-120 text-[#710523]" />

      <h2 className="z-10 px-2 text-center text-4xl font-bold md:text-5xl">
        Choose Your Flavor
      </h2>

      <div className="flex items-center justify-center">
        {/* Left */}
        <ArrowButton
          onClick={() => {
            if (!isRotating) changeFlavor(currentFlavorIndex - 1);
          }}
          direction="left"
          label="Previous Flavor"
        />
        {/* Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              ref={sodaCanRef}
              floatIntensity={0.3}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavorIndex].flavor}
            />
          </Center>

          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        {/* Right */}
        <ArrowButton
          onClick={() => {
            if (!isRotating) changeFlavor(currentFlavorIndex + 1);
          }}
          direction="right"
          label="Next Flavor"
        />
      </div>

      <div className="relative mx-auto text-center">
        <div className="soda-flavor text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="soda-price mt-2 text-2xl font-normal opacity-70">
          {`12 cans - $${FLAVORS[currentFlavorIndex].price}`}
        </div>
      </div>
    </section>
  );
}

export default FlavorCarousel;
