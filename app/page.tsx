"use client";
import * as React from "react";
import Image from "next/image";
import * as RadixIcon from "@radix-ui/react-icons";
import NavigationMenu from "@/components/ui/navigation-menu";
import NavigationSheet from "@/components/ui/navigation-sheet";
import {
  Container,
  Section,
  Text,
  Grid,
  Flex,
  Box,
  Heading,
} from "@radix-ui/themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <>
      <Container
        maxWidth={"100"}
        className="min-h-screen bg-[#0f172a] text-primary"
      >
        <Section
          className={`fixed flex w-full py-3 md:py-4 px-5 md:px-10  ${
            isScrolled && `bg-primary/100 text-white shadow-2xl`
          }`}
        >
          <NavigationSheet />
          <NavigationMenu />
        </Section>
        <Section>
          <Grid columns={{ initial: "1", sm: "2" }}>
            <Flex
              gap={"5"}
              direction={"column"}
              justify={"center"}
              className="order-2 md:order-1 p-5 md:p-12 h-[40vh] xs:h-[45vh] xxs:h-[50vh] xss:h-[55vh] sm:h-[75vh] space-y-5"
            >
              <Flex
                direction="column"
                align={{ initial: "center", sm: "start" }}
                className="sm:space-y-10 md:space-y-5 lg:space-y-10 lg:mt-20"
              >
                <Heading
                  as={"h1"}
                  className="text-xl xss:text-2xl sm:text-[45px] md:text-2xl lg:text-[40px]"
                >
                  Hi, I am
                </Heading>
                <Heading
                  as={"h3"}
                  className="text-xl xss:text-3xl sm:text-[50px] md:text-3xl lg:text-[45px]"
                >
                  Haruna Usman Bello
                </Heading>
                <Heading
                  as={"h5"}
                  className="text-lg xss:text-3xl sm:text-[45px] md:text-2xl lg:text-[40px]"
                >
                  Software Engineer
                </Heading>
              </Flex>
              <Flex
                direction={"row"}
                gap={"5"}
                align={"center"}
                justify={{ initial: "center", md: "start" }}
              >
                <Link
                  href="https://linkedin.com/in/harunausmanbello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <RadixIcon.LinkedInLogoIcon className="w-7 h-7 sm:w-8 sm:h-8 hover:text-white/90" />
                </Link>
                <Link
                  href="https://github.com/harunausmanbello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <RadixIcon.GitHubLogoIcon className="w-7 h-7 sm:w-8 sm:h-8 hover:text-white/90" />
                </Link>
              </Flex>
              <Flex
                direction={{ initial: "column", xs: "row" }}
                align={{ initial: "center", sm: "start" }}
                justify={{ initial: "center", md: "start" }}
                gap={"5"}
              >
                <Button className="sm:h-10  sm:px-8">
                  <RadixIcon.DownloadIcon className="w-7 h-7" />
                  Download Resumé
                </Button>
                <Button className="sm:h-10  sm:px-8" asChild>
                  <Link
                    href="https://wa.me/+2349039083938"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <RadixIcon.ChatBubbleIcon className="w-7 h-7" />
                    Let&apos;s Talk
                  </Link>
                </Button>
              </Flex>
            </Flex>

            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              className="order-1 md:order-2 h-[40vh] xs:h-[45vh] xxs:h-[50vh] xss:h-[55vh] sm:h-[75vh] p-5"
            >
              <Avatar className="w-fit h-fit lg:mt-20">
                <AvatarImage src="picture.jpg" alt="picture" />
                <AvatarFallback>Picture</AvatarFallback>
              </Avatar>
            </Flex>
          </Grid>
        </Section>
      </Container>
    </>
  );
}
