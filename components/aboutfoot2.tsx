"use client";

import type {IconProps} from "@iconify/react";

import React from "react";
import {Button, Input, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeIcon} from "../social";

import Image from "next/image";


type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    {name: "Branding", href: "#"},
    {name: "Data Analysis", href: "#"},
    {name: "E-commerce Solutions", href: "#"},
 
  ],
  supportOptions: [
    {name: "Pricing Plans", href: "#"},
    {name: "User Guides", href: "#"},
    {name: "Tutorials", href: "#"},
  
  ],
  aboutUs: [
    {name: "Our Story", href: "#"},
    {name: "Latest News", href: "#"},
    {name: "Career Opportunities", href: "#"},
   
  
  ],
  legal: [
    {name: "Claim", href: "#"},
    {name: "Privacy", href: "#"},
    {name: "Terms", href: "#"},
  
  ],
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
    {
      name: "GitHub",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github" />,
    },
  ],
};

export default function AboutFooter2() {
  
  return (
    <footer className="flex w-full flex-col  border-white">

<Image
     className=" object-cover w-full "
  src="/images/a5.jpg"
  alt="{name}"
  quality={50}
  width={440}
  height={0}
  style={{ width: 'full', height: '35vh' }} // optional
  priority
/>




      <div className="mx-auto px-5 pb-8 pt-6 sm:pt-24 lg:px-8 lg:pt-32">
        
       

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-3 md:pr-8">
            <div className="flex items-center justify-start">
              <AcmeIcon size={44} />
              {/* <img className="h-8 w-auto" src="./images/logo.png" alt="Logo" /> */}
              <span className="text-medium px-1 font-medium">About</span>
            </div>
            <p className="text-small text-default-500 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link key={item.name} isExternal className="text-default-400" href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                </Link>
              ))}
            </div>
          </div>
      
        </div>


        <div className="flex flex-wrap justify-between gap-2 pt-5">
          <p className="text-small text-default-400">&copy; 2024 Joes Italian Kitchen. All rights reserved.</p>
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </footer>
  );
}
