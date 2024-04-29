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
  { name: "Home", route: "/" },
  { name: "Menu", route: "/menu" },
  { name: "Locations", route: "/locations" },
  { name: "About", route: "/about" },
];

export default function Nav2(props: NavbarProps) {
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
          item: ["hidden md:flex", "flex", "relative", 
          "focus:outline-none",
          "items-center", 
          "focus:outline-none",
          "data-[active=true]:after:content-['']", "data-[active=true]:after:absolute", "data-[active=true]:after:bottom-0", "data-[active=true]:after:left-0", "data-[active=true]:after:right-0", "data-[active=true]:after:h-[2px]", "data-[active=true]:after:rounded-[2px]", "data-[active=true]:after:bg-red-700"],
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
              onPress={() => setIsMenuOpen(false)}
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
        {/* <NavbarMenu
          className="top-[calc(var(--navbar-height)_-_1px)] grid grid-cols-2 max-h-fit bg-default-200/50 pb-4 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
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
              <div>
                <Link
                  className="mb-2 w-full text-default-500 text-lg px-1"
                  href={item.route}
                
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              </div>
              {index < menuItems.length - 1 && <Divider className="opacity-50" />}
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="col-span-2 pt-1">
            <div className="flex justify-between w-full gap-3">
              <Button
              size="sm"
                as={Link}
                href="/#"
                variant="faded"
                className="flex-1 mr-2 text-xs rounded-xl hover:bg-green-700 hover:border-white bg-default-400 border-green-800 border-2"
                onClick={() =>
                  window.open(
                    "https://www.ubereats.com/ca/store/joes-italian-kitchen/Z4rz0qIwTSq1vaWJQSrLRw "
                  )
                }
              >
                UBER EATS
              </Button>
              <Button
              size="sm"
                as={Link}
                href="/"
                variant="faded"
                className="flex-1 hover:border-white text-xs rounded-xl bg-default-200 border-1.5 border-default-500"
                onClick={() =>
                  window.open(
                    "https://joesitaliankitchen-1asc.mobi2go.com"
                  )
                }
              >
                ORDERS
              </Button>
              <Button
              size="sm"
                as={Link}
                href=""
                variant="faded"
                className="flex-1 ml-2 hover:border-white text-xs rounded-xl bg-default-50 border-default-500 border-1.5"
                onClick={onOpen}
              >
                RESERVATIONS
              </Button>
            </div>
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
                        onClick={() =>
                          window.open(
                            "https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364"
                          )
                        }
                        onPress={onClose}
                      >
                        Almonte
                      </Button>
                      <Button
                        color="default"
                        className="border-white border"
                        onClick={() =>
                          window.open(
                            "https://booking.resdiary.com/widget/Standard/JoesItalianKitchenWellington/438"
                          )
                        }
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
        </NavbarMenu> */}
        <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: {opacity: 0, y: -20},
          animate: {opacity: 1, y: 0},
          exit: {opacity: 0, y: -20},
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded"
           onClick={() =>
            window.open(
              "https://joesitaliankitchen-1asc.mobi2go.com"
            )
          }>
            Orders
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
            Reservations
          </Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href="#" size="md">
              {item.name}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    </>
  );
}
