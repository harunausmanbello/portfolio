"use client";
import * as React from "react";
import * as Icon from "lucide-react";
import * as Sheet from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Flex } from "@radix-ui/themes";
import { menuList } from "@/data";

export default function NavigationSheet() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Sheet.Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Sheet.SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden ml-auto size-8"
          onClick={() => setIsOpen(true)}
        >
          <Icon.Menu className="h-3 w-3" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent>
        <Sheet.SheetHeader className="border-b mb-5">
          <Sheet.SheetTitle>Haruna Usman Bello</Sheet.SheetTitle>
          <Sheet.SheetDescription className="sr-only">
            Navigation menu
          </Sheet.SheetDescription>
        </Sheet.SheetHeader>
        <Flex
          as="div"
          direction={"column"}
          align={"baseline"}
          justify={"center"}
          className="gap-8"
        >
          {menuList.map((item, index) => (
            <Sheet.SheetClose asChild key={item.label}>
              <Link key={index} href={item.href}>
                {item.label}
              </Link>
            </Sheet.SheetClose>
          ))}
        </Flex>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
}
