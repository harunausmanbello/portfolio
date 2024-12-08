"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Section,
  Grid,
  Flex,
  Heading,
  Box,
  Text,
} from "@radix-ui/themes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { portfolio } from "@/data";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioPage = () => {
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [hoveredCardIndex, setHoveredCardIndex] = React.useState<string>("");

  return (
    <Container
      id={"portfolio"}
      className="min-h-fit bg-[#0f172a]/100 text-primary group pt-10"
    >
      <Section>
        <Grid columns={{ initial: "1", sm: "4" }}>
          <Flex
            gap={"5"}
            direction={"column"}
            justify={"start"}
            className="px-5 mb-10"
            gridColumn={{ initial: "1", sm: "1" }}
          >
            <Heading as={"h1"} className="text-[35px]">
              Portfolio
            </Heading>
            <Box
              as="div"
              className="border-b-2 border-primary w-1/5 group-hover:w-10/12"
            ></Box>
          </Flex>

          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            gridColumn={{ initial: "1", sm: "2 / span 3" }}
            className="px-5 space-y-10 w-full"
          >
            <Tabs
              defaultValue="all"
              className="w-full flex items-center justify-center "
            >
              <TabsList className="w-full sm:w-2/3 bg-primary text-[#0f172a]">
                <TabsTrigger
                  value="all"
                  className="w-full"
                  onClick={() => setSelectedTab("all")}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="w-full"
                  onClick={() => setSelectedTab("web")}
                >
                  Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="w-full"
                  onClick={() => setSelectedTab("mobile")}
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="desktop"
                  className="w-full"
                  onClick={() => setSelectedTab("desktop")}
                >
                  Desktop
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Grid
              columns={{ initial: "1", xs: "2", md: "3" }}
              gap="3"
              className="w-full"
            >
              {portfolio
                .filter(
                  ({ category }) =>
                    selectedTab === "all" ||
                    category.toLowerCase() === selectedTab
                )
                .map(({ project }) =>
                  project.map(
                    ({
                      name,
                      image,
                      technologiesUsed,
                      websiteLink,
                      gibhubLink,
                      credentials,
                    }) => (
                      <Card
                        key={name}
                        className="shadow-2xl bg-primary p-2 min-w-full flex flex-col"
                      >
                        <CardHeader
                          onMouseEnter={() => setHoveredCardIndex(name)}
                          onMouseLeave={() => setHoveredCardIndex("")}
                          className="bg-white min-h-[150px] rounded-sm relative overflow-hidden"
                        >
                          <Image
                            src={`${image}`}
                            className="object-fill "
                            alt="project preview"
                            fill
                            priority
                            sizes="100"
                          />
                          <Box
                            as="div"
                            className={`absolute flex flex-col text-justify items-center justify-center top-0 left-0 right-0 bottom-0 bg-black text-white transition-opacity duration-300 ${
                              hoveredCardIndex === name
                                ? "opacity-70"
                                : "opacity-0"
                            }`}
                            style={{
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            <Text as="p" size={"3"}>Login Details</Text>
                            <Text as="p" size={"2"}>
                              Username: {credentials?.username}
                            </Text>
                            <Text as="p" size={"2"}>
                              Password: {credentials?.password}
                            </Text>
                          </Box>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <Heading
                            as="h1"
                            align={"left"}
                            size={"2"}
                            className="pt-4"
                          >
                            {name}
                          </Heading>
                          <Text
                            as="p"
                            className="text-xs text-gray-500 text-justify"
                          >
                            Technologies: {technologiesUsed.join(", ")}
                          </Text>
                        </CardContent>

                        <CardFooter className="w-full p-0 gap-5 ">
                          <Box
                            as="div"
                            className="flex items-center justify-between w-full gap-5 bottom-0"
                          >
                            <Button
                              className="w-full border border-[#0f172a] hover:bg-[#0f172a] hover:text-white"
                              variant={"ghost"}
                              asChild
                            >
                              <Link href={gibhubLink || "#"} target="_blank">
                                Github
                              </Link>
                            </Button>
                            <Button
                              className="w-full bg-[#0f172a] hover:border hover:border-[#0f172a] hover:text-[#0f172a]"
                              asChild
                            >
                              <Link href={websiteLink || "#"} target="_blank">
                                Link
                              </Link>
                            </Button>
                          </Box>
                        </CardFooter>
                      </Card>
                    )
                  )
                )}
            </Grid>
          </Flex>
        </Grid>
      </Section>
    </Container>
  );
};
export default PortfolioPage;
