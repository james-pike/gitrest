import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { SlLocationPin } from "react-icons/sl";
import { PiForkKnifeFill } from "react-icons/pi";
import { Icon } from "@iconify/react";



export default function ThemeDropdown({  }) {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
        variant="bordered" className=" bg-foreground-100 hover:bg-foreground-200 px-3">
          <div className="flex items-center gap-1.5 text-large">
            <SlLocationPin />
            <div className="md:flex text-small">
              <p>Wellington</p>
            </div>
            <Icon className="flex-none text-white" icon="lucide:arrow-down" width={13}/>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="almonte"
          shortcut="⌘N"
          startContent={<SlLocationPin />}
        >
        Almonte
        </DropdownItem>
        {/* <DropdownItem
          key="nepean"
          shortcut="⌘C"
          startContent={<SlLocationPin />}
        >
          Nepean
        </DropdownItem> */}
        <DropdownItem
          key="wellington"
          shortcut="⌘⇧E"
      
          startContent={<SlLocationPin />}
        >
          Welllington
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
