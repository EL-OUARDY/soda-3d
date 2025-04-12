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

      // Animate logo opacity with smooth easing
      gsap.to(".logo", {
        opacity: 1,
        ease: "power4.in",
        duration: 0.4,
        delay: 0.3,
      });
    },
    { dependencies: [ready] },
  );
  return (
    <header className="center -mb-33 flex max-w-screen justify-center overflow-hidden p-4">
      <Logo className="logo md:text-logo text-background z-10 h-25 cursor-pointer opacity-0" />
      <svg
        className="text-logo absolute top-[-180] w-screen md:hidden"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 47.4235C0 38.0237 6.53608 29.9057 15.7703 28.1488C36.4827 24.2081 73.3424 18 100 18C126.658 18 163.517 24.2081 184.23 28.1488C193.464 29.9057 200 38.0237 200 47.4235V150.374C200 159.424 193.931 167.333 185.12 169.396C164.683 174.181 127.351 181.934 100 181.934C72.6487 181.934 35.3172 174.181 14.8798 169.396C6.06883 167.333 0 159.424 0 150.374V47.4235Z"
          fill="currentColor"
        />
      </svg>
    </header>
  );
}

export default Header;
