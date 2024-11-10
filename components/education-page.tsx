import * as React from "react";
import {
  Container,
  Section,
  Grid,
  Flex,
  Heading,
  Text,
  Box,
} from "@radix-ui/themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, experience } from "@/data";
import { BadgeCheck } from "lucide-react";
import { SkillsLevel } from "./ui/skills-level";
import { Button } from "./ui/button";

const EducationPage = () => {
  return (
    <Container className="min-h-fit bg-[#0f172a]/95 text-primary group">
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
              Education
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
            className="px-5"
          >
            <Grid columns={"1"} className="w-full">
              {education.map((item, index) => (
                <Box as="div" key={index} className="mb-10">
                  <Flex gap={"1"} direction={"column"} justify={"start"}>
                    <Heading as={"h1"} className="text-[20px]">
                      {item.date}
                    </Heading>
                    <Heading as="h4" size={"4"}>
                      {item.degree}
                    </Heading>
                    <Heading as="h4" size={"4"}>
                      {item.institution}
                    </Heading>
                  </Flex>

                  <Flex direction={"column"} justify={"start"} className="mt-2">
                    <Text size={"2"} className="text-justify">
                      {item.description}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Grid>
          </Flex>
        </Grid>
      </Section>
    </Container>
  );
};
export default EducationPage;
