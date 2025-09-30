import React from "react";
import { Navigation, LanguageSwitcher } from "@molecules";
import { Logo } from "@atoms";

export const Header: React.FC = () => {
  const menu = [
    { name: "home", path: "#home" },
    { name: "oracle", path: "#oracle" },
    { name: "contact", path: "#contact" },
  ];

  return (
    <header className="flex justify-between items-center relative">
      <Logo />
      <Navigation menu={menu} />
      <LanguageSwitcher />
    </header>
  );
};
