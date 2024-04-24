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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [refresh, setRefresh] = useState(false); // State variable for triggering refresh


  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setIsMenuOpen(false);
    setRefresh((prevState) => !prevState);
  };

  return (
    <>
   <Modal
  classNames={{
    base: "justify-start sm:m-0 p-0 h-dvh max-h-full",
    wrapper: "sm:items-start sm:justify-start max-w-[80%]",
    body: "p-0",
    closeButton: "z-50 hidden",
  }}
  isOpen={isOpen}
  motionProps={{
    initial: { x: -288 }, // Initial position shifted to the left
    animate: { x: 0 },
    exit: { x: -288 }, // Exit position shifted to the left
    transition: {
      duration: 0.12,
      ease: "easeOut",
    },
  }}
  radius="none"
  // scrollBehavior="inside"
  onOpenChange={onOpenChange}
>
        <ModalContent>
          <ModalBody>
            <div className="relative flex h-full w-78 flex-1 flex-col p-6">
              <div className="flex items-center gap-2 px-0">
                <div className="flex items-center justify-center rounded-full ">
                 <img className="aspect-square h-10 " src="./images/logo.png" alt="Logo" /> 
                </div>
                <span className="text-xl pl-1 font-bold uppercase text-default-500 ">JOES ITALIAN KITCHEN</span>
              </div>
              <div className="border-b-2 border-gray-500 mt-5"></div>
             <Spacer y={1} /> 
              {/* <div className="flex items-center gap-3 px-3">
                <Avatar
                  isBordered
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <div className="flex flex-col">
                  <p className="text-small font-medium text-default-600">Wellington</p>
              
                </div>
              </div>  */}

              <ScrollShadow className="-mr-6 h-full max-h-full pt-5 pr-6">
              <Sidebar defaultSelectedKey={path === "/" ? "home" : path.substring(1)} items={sectionItems} />
              </ScrollShadow>

              <Spacer y={2} />
              <div className="mt-auto flex flex-col space-y-3  border-gray-500 pt-4">
                
              
                
                <Button
                  fullWidth
                  className="justify-start border-gray-500 border-2 text-medium font-medium text-default-500 data-[hover=true]:text-foreground"
                  startContent={
                    <Icon
                      className="text-default-500"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
                  }
                  variant="light"
                >
                  UBER EATS
                </Button>
                <Button
                  fullWidth
                  className="justify-start border-gray-500 border-2 text-medium font-medium text-default-500 data-[hover=true]:text-foreground"
                  startContent={
                    <Icon
                      className="text-default-500"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
                  }
                  variant="light"
                >
                  ONLINE ORDERS
                </Button>
                <Button
                  fullWidth
                  className="justify-start bg-black border-2 border-gray-500 text-default-500 font-medium text-medium data-[hover=true]:text-foreground"
                  startContent={
                    <Icon
                      className="text-default-500"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
                  }
                  variant="light"
                >
                  RESERVATIONS 
                </Button>

              <Socials/>
              </div>
              
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
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
        <NavbarMenuToggle
          className="text-white md:hidden"
          style={{ outline: 'none' }}
          onClick={onOpen}
        />
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
      </Navbar>
    </>
  );
}
