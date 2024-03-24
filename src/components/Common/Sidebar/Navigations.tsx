"use client";
import { HomeIcon, IconJarLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { IoTrailSignOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Navigations = () => {
  const router = useRouter();
  function handleSignOut() {
    localStorage.removeItem("auth-token");
    location.href = "/login";
  }
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col items-start gap-1">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} flex gap-4 items-center min-w-[200px] ml-1 bg-gray-50`}
            >
              <HomeIcon width={20} height={20} className="gray-red-300" /> Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} flex gap-4 items-center min-w-[200px] bg-gray-50 cursor-pointer`}
            onClick={handleSignOut}
          >
            <IoTrailSignOutline
              width={20}
              height={20}
              className="gray-red-300"
            />
            Sign Out
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigations;
