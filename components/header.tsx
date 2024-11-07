"use client";
import * as React from "react";
import NavigationMenu from "@/components/ui/navigation-menu";
import NavigationSheet from "@/components/ui/navigation-sheet";
import { Section } from "@radix-ui/themes";
export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Section
      className={`fixed flex w-full py-4 px-5 text-primary ${
        isScrolled && `bg-primary/100 shadow-2xl text-white`
      }`}
    >
      <NavigationSheet />
      <NavigationMenu />
    </Section>
  );
};
