import * as React from "react";
import * as RadixIcon from "@radix-ui/react-icons";
import Link from "next/link";
import { AwardIcon, FilesIcon } from "lucide-react";
import {
  Container,
  Section,
  Grid,
  Flex,
  Heading,
  Text,
  Box,
} from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <Container
      id={"about"}
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
            <Heading as={"h1"} className="text-[35px] ">
              About
            </Heading>
            <Box
              as="div"
              className="border-b-2 border-primary w-1/5 group-hover:w-10/12"
            ></Box>
            <Card className="shadow-2xl h-fit bg-primary text-center">
              <CardHeader>
                <CardTitle>
                  <Flex
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                  >
                    <AwardIcon />
                    <Heading as="h1" align={"center"} size={"5"}>
                      Experience
                    </Heading>
                  </Flex>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text
                  as="p"
                  className="text-balance -mt-5  text-muted-foreground"
                >
                  1+ years of Experience
                </Text>
              </CardContent>
            </Card>
            <Card className="shadow-2xl h-fit bg-primary text-center">
              <CardHeader>
                <CardTitle>
                  <Flex
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                  >
                    <FilesIcon />
                    <Heading as="h1" align={"center"} size={"5"}>
                      Projects
                    </Heading>
                  </Flex>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text
                  as="p"
                  className="text-balance -mt-5 text-muted-foreground"
                >
                  5+ Completed
                </Text>
              </CardContent>
            </Card>
          </Flex>

          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            className="space-y-5 text-justify px-5 "
            gridColumn={{ initial: "1", sm: "2 / span 3" }}
          >
            <Text as="p">
              Hello, I&apos;m Haruna Usman Bello, a dedicated full-stack
              software engineer. With a deep passion for technology, I
              specialize in crafting scalable, secure, and efficient
              applications across web, mobile and desktop platforms. From
              backend architecture to front-end interfaces, I have a proven
              track record of delivering high-quality software solutions using
              technologies such as Node.js, TypeScript, C#, PHP, React.js, React
              Native, Next.js and more.
            </Text>
            <Text as="p">
              Throughout my career, I&apos;ve designed and implemented systems
              that drive measurable results, such as automating payment
              workflows for large-scale cash transfer programs and developing
              school management platforms that streamline administrative tasks
              for thousands of students. My experience spans across multiple
              industries, where I&apos;ve consistently improved operational
              efficiencies, enhanced user experiences, and optimized system
              performance.
            </Text>
            <Text as="p">
              I hold a Software Engineering certification, along with a
              Bachelor&apos;s degree in Computer Science, which has provided me
              with a strong foundation in both the technical and strategic
              aspects of software development.
            </Text>
            <Text as="p">
              I&apos;m always looking to collaborate on projects that push the
              boundaries of innovation, and I am eager to continue growing as a
              developer. Feel free to explore my portfolio and get in touch if
              you&apos;re interested in working together!
            </Text>
            <Button
              className="w-full hover:bg-primary border border-primary rounded-sm"
              variant={"ghost"}
              asChild
            >
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
        </Grid>
      </Section>
    </Container>
  );
};
export default AboutPage;
