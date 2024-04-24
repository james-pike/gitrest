"use client";

import type {IconProps} from "@iconify/react";

import React from "react";
import {Button, Input, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeIcon} from "../social";
import ThemeSwitch from "@/theme-switch";
import { ThemeButton } from "./theme-button";


type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {

  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
    },

  ],
};

export default function Socials() {
  
  return (
            <div className="">
                <div className="h-8"></div>
                <div className="flex justify-between space-x-6 pt-8 px-1 pb-1 border-t-2 border-default">
                    <div className="space-x-6">
  {footerNavigation.social.map((item) => (
    <Link key={item.name} isExternal className="text-default-400" href={item.href}>
      <span className="sr-only">{item.name}</span>
      <item.icon aria-hidden="true" className="w-6 text-xl" />
    </Link>
  ))}
  </div>
  {/* Add the icon you want to align to the right */}
  <div className="flex ">
    {/* Your icon component */}
    <ThemeButton />
  </div>
</div>
            </div>
    
  );
}
