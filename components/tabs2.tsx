'use client'
import React, { useState, useEffect } from "react";
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

export default function Tab2(props: CardProps) {
  // Retrieve selected location from local storage or default to "Wellington"
  const [selectedLocation, setSelectedLocation] = useState(
    localStorage.getItem("selectedLocation") || "Wellington"
  );

  useEffect(() => {
    // Save selected location to local storage whenever it changes
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

  const handleLocationChange = (location: React.SetStateAction<string>) => {
    setSelectedLocation(location);
  };

  return (
    <Card {...props}>
      <div style={{ overflowX: 'auto' }}> {/* Container for tabs */}
        <div className="w-full max-w-[1024px] px-4 lg:px-8"></div>
        <header className="mb-4 flex w-full items-center justify-between mt-5 px-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-default-900 lg:text-3xl">Menu</h1>
            <p className="text-medium text-default-400 lg:text-medium">{selectedLocation} Menu</p>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className=" bg-foreground-100 hover:bg-foreground-200 px-3">
                <div className="flex items-center gap-1.5 text-large">
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
                shortcut="⌘N"
                onClick={() => handleLocationChange("Almonte")}
                startContent={<SlLocationPin />}
              >
                Almonte
              </DropdownItem>
              <DropdownItem
                key="nepean"
                shortcut="⌘C"
                onClick={() => handleLocationChange("Nepean")}
                startContent={<SlLocationPin />}
              >
                Nepean
              </DropdownItem>
              <DropdownItem
                key="wellington"
                shortcut="⌘⇧E"
                onClick={() => handleLocationChange("Wellington")}
                startContent={<SlLocationPin />}
              >
                Wellington
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </header>
        <div>
        </div>
        {selectedLocation === "Wellington" && <Primtab />}
        {selectedLocation === "Almonte" && <div>Almonte Tabs</div>}
        {selectedLocation === "Nepean" && <Nepeantab />}
      </div>
    </Card>
  );
}
