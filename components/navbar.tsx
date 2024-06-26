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
  useDisclosure,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "HOME", route: "/" },
  { name: "MENU", route: "/menu" },
  { name: "LOCATIONS", route: "/locations" },
  { name: "ABOUT", route: "/about" },
];

export default function CombinedNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleMenuItemClick = () => {
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
          className="top-[calc(var(--navbar-height)_-_1px)] grid grid-cols-3 max-h-fit bg-default-200/50 pb-4 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
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
                className="mb-2 w-full text-default-500 text-2xl px-1 col-span-2"
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
            <Button
              fullWidth
              as={Link}
              href="/#"
              variant="faded"
              className="hover:bg-green-700 hover:border-white bg-default-300 col-span-1"
              onClick={() => window.open("https://www.ubereats.com/ca/store/joes-italian-kitchen/Z4rz0qIwTSq1vaWJQSrLRw ")}
            >
              UBER EATS
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              fullWidth
              as={Link}
              href="/"
              variant="faded"
              className="hover:border-white bg-default-400 col-span-1"
              onClick={() => window.open("https://joesitaliankitchen-1asc.mobi2go.com")}
            >
              ONLINE ORDERS
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              onPress={onOpen}
              fullWidth
              as={Link}
              href="/#"
              variant="faded"
              className="bg-black hover:border-white col-span-1"
            >
              RESERVATIONS
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">RESERVATIONS</ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque integra connect Open Table
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="default"
                        className="border-white border"
                        onClick={() => window.open("https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364")}
                        onPress={onClose}
                      >
                        Almonte
                      </Button>
                      <Button
                        color="default"
                        className="border-white border"
                        onClick={() => window.open("https://booking.resdiary.com/widget/Standard/JoesItalianKitchenWellington/438")}
                        onPress={onClose}
                      >
                        Wellington
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
