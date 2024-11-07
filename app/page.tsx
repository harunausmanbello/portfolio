import * as React from "react";
import HomePage from "@/components/home-page";
import AboutPage from "@/components/about-page";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutPage />
    </>
  );
}
