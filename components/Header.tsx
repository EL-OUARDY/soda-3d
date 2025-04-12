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
    <header className="center -mb-33 flex justify-center p-4">
      <Logo className="logo text-logo z-10 h-25 cursor-pointer opacity-0" />
    </header>
  );
}

export default Header;
