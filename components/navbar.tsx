import type { NavbarProps } from "@nextui-org/react";
import React, { useState } from "react";
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
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
  Spacer,
  useDisclosure,
  Avatar,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import ThemeDropdown from "./theme-dropdown";
import { PiForkKnifeFill } from "react-icons/pi";
import { LuHome } from "react-icons/lu";
import { AcmeLogo } from "./acme";
import { sectionItems, sectionItemsWithTeams } from "./sidebar-items";
import { Icon } from "@iconify/react";
import Sidebar from "./sidebar";
import Socials from "./socials";

const menuItems = [
  { name: "HOME", route: "/" },
  { name: "MENU", route: "/menu" },
  { name: "LOCATIONS", route: "/locations" },
  { name: "ABOUT", route: "/about" },
  // { name: "ABOUT", route: "/about" },
];

export default function CombinedNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  



  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setIsMenuOpen(false);

  };

  return (
    <>
      <Navbar
        {...props}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        classNames={{
          base: "border-default-100",
          wrapper: "justify-between",
          item: ["hidden md:flex", "flex", "relative", "items-center", "data-[active=true]:after:content-['']", "data-[active=true]:after:absolute", "data-[active=true]:after:bottom-0", "data-[active=true]:after:left-0", "data-[active=true]:after:right-0", "data-[active=true]:after:h-[2px]", "data-[active=true]:after:rounded-[2px]", "data-[active=true]:after:bg-red-700"],
        }}
        className="lg:px-10 border-y-1"
        height="60px"
      >
        <NavbarBrand>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div className="rounded-full mt-3 py-0 text-background -ml-3">
              <img className="h-16 w-auto" src="./images/logo.png" alt="Logo" />
            </div>
          </a>
        </NavbarBrand>
        {/* <NavbarMenuToggle
          className="text-white md:hidden"
          style={{ outline: 'none' }}
          onClick={() => setIsMenuOpen(isMenuOpen)}
        /> */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavbarItem isActive={path === item.route}>
                <Link
                  color={path === item.route ? "foreground" : "foreground"}
                  className="w-full"
                  href={item.route}
                  size="md"
                  onClick={handleMenuItemClick} // Close menu when clicked
                >
                  {item.name}
                </Link>
              </NavbarItem>
              {index < menuItems.length - 1 && (
                <div className="h-1 w-1 bg-white rounded-full"></div>
              )}
            </React.Fragment>
          ))}
        </NavbarContent>
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem className="ml-2 !flex gap-2">
            <Button
              className="text-default-500"
              radius="full"
              variant="light"
              href=""
              onClick={() =>
                window.open("https://joesitaliankitchen-1asc.mobi2go.com")
              }
            >
              Orders
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364",
                  "_blank"
                )
              }
              className="dark:bg-foreground bg-red-800 font-medium text-background"
              color="secondary"
              radius="full"
              variant="flat"
            >
              Reservations
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



      
    </>
  );
}
