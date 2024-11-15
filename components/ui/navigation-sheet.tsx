"use client";
import * as React from "react";
import * as Icon from "lucide-react";
import * as Sheet from "@/components/ui/sheet";
import Link from "next/link";
import { Box, Flex } from "@radix-ui/themes";
import { menuList } from "@/data";
import { useWindowWidth } from "@react-hook/window-size";

export default function NavigationSheet() {
  const [isOpen, setIsOpen] = React.useState(false);
  const widthSize = useWindowWidth();
  const isDesktop = widthSize >= 768;

  React.useEffect(() => {
    if (isDesktop && isOpen) {
      setIsOpen(false);
    }
  }, [isDesktop, isOpen]);

  return (
    <Sheet.Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Sheet.SheetTrigger asChild>
        <Box className="ml-auto">
          <Icon.Menu
            className="shrink-0 md:hidden sm:size-8"
            onClick={() => setIsOpen(true)}
          />
          <span className="sr-only">Toggle navigation menu</span>
        </Box>
      </Sheet.SheetTrigger>
      <Sheet.SheetContent side={"top"} className="bg-primary/90 text-[#0f172a]">
        <Sheet.SheetHeader className="border-b mb-5 border-[#0f172a] text-[#0f172a]">
          <Sheet.SheetTitle className="text-[#0f172a]">
            Haruna Usman Bello
          </Sheet.SheetTitle>
          <Sheet.SheetDescription className="sr-only">
            Navigation menu
          </Sheet.SheetDescription>
        </Sheet.SheetHeader>
        <Flex
          as="div"
          direction={"column"}
          align={"center"}
          justify={"center"}
          className="gap-8"
        >
          {menuList.map(({ slug, label }) => (
            <Sheet.SheetClose asChild key={slug}>
              <Link key={slug} href={`#${slug}`}>
                {label}
              </Link>
            </Sheet.SheetClose>
          ))}
        </Flex>
      </Sheet.SheetContent>
    </Sheet.Sheet>
  );
}
