import * as React from "react";
import Header from "@/components/header";
import HomePage from "@/components/home-page";
import AboutPage from "@/components/about-page";
import SkillsPage from "@/components/skills-page";
import PortfolioPage from "@/components/portfoli-page";
import ExperiencePage from "@/components/experience-page";
import EducationPage from "@/components/education-page";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ExperiencePage />
      <EducationPage />
    </>
  );
}
