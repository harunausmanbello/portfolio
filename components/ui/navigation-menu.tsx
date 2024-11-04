"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { menuList } from "@/data";

interface LinkProps {
  href: string;
  [key: string]: any;
}

const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </NavigationMenu.Link>
  );
};

export default () => (
  <NavigationMenu.Root className="hidden md:block ml-auto">
    <NavigationMenu.List className="flex gap-10 items-center ">
      {menuList.map((item, index) => (
        <NavigationMenu.Item key={item.href}>
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        </NavigationMenu.Item>
      ))}
    </NavigationMenu.List>
  </NavigationMenu.Root>
);
