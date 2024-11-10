"use client";
import * as React from "react";
import * as RadixIcon from "@radix-ui/react-icons";
import Link from "next/link";
import { Container, Section, Grid, Flex, Heading } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HomePage = () => {
  return (
    <Container id={"home"} className="min-h-fit bg-[#0f172a] text-primary">
      <Section>
        <Grid columns={{ initial: "1", sm: "2" }}>
          <Flex
            gap={"5"}
            direction={"column"}
            justify={"center"}
            className="order-2 md:order-1 mt-5"
          >
            <Flex
              direction="column"
              align={{ initial: "center", lg: "start" }}
              justify={{ initial: "center", md: "start" }}
              className="space-y-3"
            >
              <Heading as={"h1"} className="text-xl xss:text-2xl xs:text-4xl">
                Hi, I&apos;m Haruna Usman Bello, <br /> a Software Engineer.
              </Heading>
              <Heading
                as={"h5"}
                className="text-sm text-muted-foreground px-5 xl:px-0 text-justify"
              >
                I build robust, user-centric web applications from frontend to
                backend, delivering scalable and impactful solutions.
              </Heading>
            </Flex>
            <Flex
              direction={"row"}
              gap={"3"}
              align={{ initial: "center", sm: "start" }}
              justify={{ initial: "center", lg: "start" }}
            >
              <Link
                href="https://linkedin.com/in/harunausmanbello/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <RadixIcon.LinkedInLogoIcon className="w-6 h-6 hover:text-white/90" />
              </Link>
              <Link
                href="https://github.com/harunausmanbello/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <RadixIcon.GitHubLogoIcon className="w-6 h-6 hover:text-white/90" />
              </Link>
            </Flex>
            <Flex
              direction={{ initial: "column", xs: "row" }}
              align={{ initial: "center", sm: "start" }}
              justify={{ initial: "center", lg: "start" }}
              gap={"5"}
            >
              <Button className="w-fit xxs:w-fit ">
                <RadixIcon.DownloadIcon className="w-7 h-7" />
                <Link href={"resumé.pdf"} target="_blank">
                  View Resumé
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href="https://wa.me/+2349039083938"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  Hire Me!
                </Link>
              </Button>
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            className="order-1 md:order-2 px-5"
          >
            <Avatar className="w-full h-full">
              <AvatarImage src="picture.png" alt="picture" />
              <AvatarFallback>Picture</AvatarFallback>
            </Avatar>
          </Flex>
        </Grid>
      </Section>
    </Container>
  );
};
export default HomePage;
