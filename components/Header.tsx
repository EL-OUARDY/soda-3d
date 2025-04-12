import React from "react";
import Logo from "./icons/Logo";
import useStore from "@/hooks/useStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Header() {
  const { ready } = useStore();

  useGSAP(
    () => {
      if (!ready) return;

      // Animate logo opacity with smooth sine easing
      gsap.to(".logo", { opacity: 1, ease: "sine.in()" });
    },
    { dependencies: [ready] },
  );
  return (
    <header className="center -mb-28 flex justify-center p-4">
      <Logo className="logo z-10 h-20 cursor-pointer text-sky-800 opacity-0" />
    </header>
  );
}

export default Header;
