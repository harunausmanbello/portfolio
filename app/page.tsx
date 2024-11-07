import * as React from "react";
import HomePage from "@/components/home-page";
import AboutPage from "@/components/about-page";
import { Header } from "@/components/header";
import SkillsPage from "@/components/skills-page";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <SkillsPage />
    </>
  );
}
