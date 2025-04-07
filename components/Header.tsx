import React from "react";
import Logo from "./icons/Logo";

function Header() {
  return (
    <header className="flex center justify-center p-4 -mb-28">
      <Logo className="h-20 z-10 cursor-pointer text-sky-800" />
    </header>
  );
}

export default Header;
