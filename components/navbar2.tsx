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
    MergeWithAs,
    NavbarProps,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@/cn";

const menuItems = [
    { name: "HOME", route: "/" },
    { name: "MENU", route: "/menu" },
    { name: "LOCATIONS", route: "/locations" },
    { name: "ABOUT", route: "/about" },
];

export default function Navbar2(props: React.JSX.IntrinsicAttributes & MergeWithAs<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, never>, NavbarProps, "div">) {
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
                    <img src="./images/logo.png" className="h-14 bg-black" />
                </div>
            </NavbarBrand>

            {/* Center Content */}
            <NavbarContent justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            className="text-default-500"
                            href={item.route}
                            size="sm"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
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
                        <Link
                            className="mb-2 w-full text-default-500"
                            href={item.route}
                            size="lg"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            {item.name}
                        </Link>
                        {index < menuItems.length - 1 && <Divider className="opacity-50" />}
                    </NavbarMenuItem>
                ))}
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
