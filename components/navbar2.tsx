"use client";

import type { NavbarProps } from "@nextui-org/react";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Button,
    Divider,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { cn } from "@/cn";
import { AcmeIcon } from "./social";

const menuItems = [
    "Home",
    "Menu",
    "Locations",
    "About",

];

export default function Navbar2(props: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            {...props}
            classNames={{
                base: cn("border-default-100", {
                    "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
                }),
                wrapper: "w-full justify-center",
                item: "hidden md:flex",
            }}
            height="60px"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* Left Content */}
            <NavbarBrand>
                <div className="rounded-full bg-foreground text-background">
                    <img src="./images/logo.png" className="h-10 bg-black" />
                </div>
                {/* <span className="ml-3 text-small font-medium">ACME</span> */}
            </NavbarBrand>

            {/* Center Content */}
            <NavbarContent justify="center">
                <NavbarItem>
                    <Link className="text-default-500" href="#" size="sm">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500" href="#" size="sm">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" color="foreground" href="#" size="sm">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500" href="#" size="sm">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500" href="#" size="sm">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Right Content */}
            <NavbarContent className="hidden md:flex" justify="end">
                <NavbarItem className="ml-2 !flex gap-2">
                    <Button className="text-default-500" radius="full" variant="light">
                        Login
                    </Button>
                    <Button
                        className="bg-foreground font-medium text-background"
                        color="secondary"
                        endContent={<Icon icon="solar:alt-arrow-right-linear" />}
                        radius="full"
                        variant="flat"
                    >
                        Get Started
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenuToggle className="text-default-400 md:hidden" />

            <NavbarMenu
                className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-4 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                motionProps={{
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: {
                        ease: "easeInOut",
                        duration: 0.2,
                    },
                }}
            >
       

                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="mb-2 w-full text-default-500" href="#" size="lg">
                            {item}
                        </Link>
                        {index < menuItems.length - 1 && <Divider className="opacity-50" />}
                    </NavbarMenuItem>
                ))}

{/* <div className="flex flex-row">
  <NavbarMenuItem>
    <Button fullWidth as={Link} href="/#" variant="faded">
      UBER EATS
    </Button>
  </NavbarMenuItem>
  <NavbarMenuItem className="mb-4">
    <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
      ORDER ONLINE
    </Button>
  </NavbarMenuItem>
  <NavbarMenuItem className="mb-4">
    <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
      RESERVATIONS
    </Button>
  </NavbarMenuItem>
</div> */}


<NavbarMenuItem>
                    <Button fullWidth as={Link} href="/#" variant="faded">
                        UBER EATS
                    </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button fullWidth as={Link} href="/#" variant="faded">
                        ONLINE ORDERS
                    </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button fullWidth as={Link} href="/#" variant="faded" className="mb-2">
                        RESERVATIONS
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
