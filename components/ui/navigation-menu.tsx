"use client";
import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { menuList } from "@/data";
import useDetectScroll, { Axis } from "@smakss/react-scroll-direction";

export const NavMenu = () => {
  const { scrollPosition } = useDetectScroll({ axis: Axis.Y });
  const isScrolled = scrollPosition.top > 0;
  const [activeMenuSlug, setActiveMenuSlug] = React.useState(menuList[0].slug);

  return (
    <NavigationMenu.Root className="hidden md:block ml-auto">
      <NavigationMenu.List className="flex gap-10 items-center ">
        {menuList.map(({ slug, label }) => (
          <NavigationMenu.Item key={slug}>
            <NavigationMenu.Link
              className={`${
                activeMenuSlug === slug &&
                `border-b-2 pb-1 ${
                  isScrolled ? "border-[#0f172a]" : "border-primary"
                }`
              }`}
              key={slug}
              href={`#${slug}`}
              onClick={() => setActiveMenuSlug(slug)}
            >
              {label}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
