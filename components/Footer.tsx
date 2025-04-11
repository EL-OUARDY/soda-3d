import React from "react";
import Logo from "./icons/Logo";
import SpinningCircleText from "./SpinningCircleText";

function Footer() {
  return (
    <footer className="w-screen overflow-hidden bg-[#FEE832] md:min-h-screen">
      <div className="bg-[#FE6334] text-[#FEE832]">
        <h2 className="grid w-full gap-[3vw] py-10 text-center leading-[.7] font-black uppercase">
          <div className="text-[34vw]">Soda</div>
          <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
            <span className="inline-block">that </span>
            <span className="inline-block max-md:text-[27vw]">makes </span>
            <span className="inline-block max-md:text-[40vw]">you </span>
          </div>
          <div className="text-[32vw]">Smile</div>
        </h2>
      </div>
      <div className="relative mx-auto flex max-w-4xl justify-center px-4 py-10">
        <Logo className="text-[#FE6334]" />
        <div className="absolute top-0 right-24 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <SpinningCircleText />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
