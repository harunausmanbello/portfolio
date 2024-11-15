import * as React from "react";
import Header from "@/components/header";
import HomePage from "@/components/home-page";
import AboutPage from "@/components/about-page";
import SkillsPage from "@/components/skills-page";
import PortfolioPage from "@/components/portfolio-page";
import ExperiencePage from "@/components/experience-page";
import EducationPage from "@/components/education-page";
import ContactPage from "@/components/contact-page";
import Footer from "@/components/footer";

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
      <ContactPage />
      <Footer />
    </>
  );
}
