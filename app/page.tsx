import * as React from "react";
import { Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <Flex gap="3" align="center" justify="center" height="100vh" direction="column">
      <Text as="label">Radix-ui Text</Text>
      <Button>Shadcn-ui Button</Button>
    </Flex>
  );
}
