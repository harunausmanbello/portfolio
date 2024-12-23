"use client";
import * as React from "react";
import * as LucideIcon from "lucide-react";
import { Strong, Section, Text, Flex } from "@radix-ui/themes";

const Footer = () => {
  return (
    <Section className={`bg-primary w-full py-3 px-5 font-medium`}>
      <Flex
        direction={{ initial: "column", sm: "row" }}
        align={"center"}
        justify={"between"}
      >
        <Text as="p" className="flex items-center gap-1" size={"2"}>
          Copyright <LucideIcon.Copyright size={12} /> 2024 Haruna Usman Bello.
        </Text>
        <Text as="p" size={"2"}>
          Designed and Developed by <Strong>Haruna Usman Bello</Strong>
        </Text>
      </Flex>
    </Section>
  );
};

export default Footer;
