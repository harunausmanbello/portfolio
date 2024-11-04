import { Button } from "@/components/ui/button";
import { Flex, Heading, Text } from "@radix-ui/themes";
export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      gap="4"
    >
      <Heading>Hello, World!</Heading>
      <Button variant="default" className="bg-red-300">
        Click me
      </Button>
    </Flex>
  );
}
