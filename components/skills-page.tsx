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
import { skills } from "@/data";
import { BadgeCheck } from "lucide-react";
import { SkillsLevel } from "@/components/ui/skills-level";

const SkillsPage = () => {
  return (
    <Container
      id={"skills"}
      className="min-h-fit bg-[#0f172a]/95 text-primary group pt-10"
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
              Skills
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
            px={"5"}
          >
            <Grid columns={{ initial: "1", xs: "2" }} gap="9" width={"100%"}>
              {skills.map(({ category, skills }) => (
                <Card key={category} className="shadow-2xl h-fit bg-slate-100">
                  <CardHeader>
                    <CardTitle>
                      <Heading as="h1" align={"center"} size={"5"}>
                        {category}
                      </Heading>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skills.map(({ skill, level }) => (
                      <Flex key={skill}>
                        <Text className="flex items-center gap-0.5 font-bold w-full">
                          <BadgeCheck className="w-4 h-4 text-primary" />
                          {skill}
                          <SkillsLevel starCount={level || 0} />
                        </Text>
                      </Flex>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Grid>
      </Section>
    </Container>
  );
};
export default SkillsPage;
