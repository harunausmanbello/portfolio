"use client";
import * as React from "react";
import NavigationSheet from "@/components/ui/navigation-sheet";
import useDetectScroll, { Axis } from "@smakss/react-scroll-direction";
import { Section } from "@radix-ui/themes";
import { NavMenu } from "@/components/ui/navigation-menu";

const Header = () => {
  const { scrollPosition } = useDetectScroll({ axis: Axis.Y });
  const isScrolled = scrollPosition.top > 0;

  return (
    <Section
      className={`fixed flex w-full z-10 py-4 px-5 text-primary ${
        isScrolled && "bg-primary/100 shadow-2xl text-white"
      }`}
    >
      <NavigationSheet />
      <NavMenu />
    </Section>
  );
};

export default Header;
