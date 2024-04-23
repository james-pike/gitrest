'use client';

import React, { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  CardProps,
  Card,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Primtab from "./primtab";
import { SlLocationPin } from "react-icons/sl";
import Nepeantab from "./nepeantab";
import { FiCheck } from "react-icons/fi";

export default function Tab2({ initialLocation = "Wellington", ...props }: { initialLocation?: string } & CardProps) {
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  useEffect(() => {
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <Card {...props}>
      <div style={{ overflowX: 'auto' }}>
        <header className="mb-3 flex w-full items-center justify-between mt-5 pl-5 pr-3">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-default-900 lg:text-3xl">Menu</h1>
            <p className="text-medium text-default-400 lg:text-medium">{selectedLocation} {selectedLocation === "Nepean" ? "Express" : ""} Menu</p>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className=" bg-foreground-100 hover:bg-foreground-200 px-2 h-11 focus:outline-none">
                <div className="flex items-center gap-1.5 text-large focus:outline-none">
                  <SlLocationPin />
                  <div className="md:flex text-small">
                    <p>{selectedLocation}</p>
                  </div>
                  <Icon className="flex-none text-white" icon="lucide:arrow-down" width={13} />
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
              <DropdownItem
                key="almonte"
                shortcut={selectedLocation === "Almonte" && <FiCheck />}
                onClick={() => handleLocationChange("Almonte")}
                startContent={<SlLocationPin />}
              >
                Almonte
              </DropdownItem>
              {/* <DropdownItem
                key="nepean"
                shortcut={selectedLocation === "Nepean" && <FiCheck />}
                onClick={() => handleLocationChange("Nepean")}
                startContent={<SlLocationPin />}
              >
                Nepean
              </DropdownItem> */}
              <DropdownItem
                key="wellington"
                shortcut={selectedLocation === "Wellington" && <FiCheck />}
                onClick={() => handleLocationChange("Wellington")}
                startContent={<SlLocationPin />}
              >
                Wellington
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </header>
        <div>
          {selectedLocation === "Wellington" ? <Primtab /> :
          selectedLocation === "Almonte" ? <Primtab /> : <Nepeantab />}
        </div>
      </div>
    </Card>
  );
}

export async function getServerSideProps() {
  // Fetch initial location from the server or use a default value
  const initialLocation = "Wellington"; // Replace with logic to fetch from the server if needed

  return {
    props: {
      initialLocation,
    },
  };
}
