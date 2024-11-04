"use client";
import * as React from "react";
import NavigationMenu from "@/components/ui/navigation-menu";
import NavigationSheet from "@/components/ui/navigation-sheet";
import { Container, Section } from "@radix-ui/themes";

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container maxWidth="100">
      <Section
        className={`fixed flex w-full py-2 md:py-3 px-5 md:px-10  ${
          isScrolled && `bg-black/50 shadow-2xl`
        }`}
      >
        <NavigationSheet />
        <NavigationMenu />
      </Section>
    </Container>
  );
}
