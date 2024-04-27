"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { AcmeIcon } from "../social";


type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
    services: [
        { name: "Branding", href: "#" },
        { name: "Data Analysis", href: "#" },
        { name: "E-commerce Solutions", href: "#" },

    ],
    supportOptions: [
        { name: "Pricing Plans", href: "#" },
        { name: "User Guides", href: "#" },
        { name: "Tutorials", href: "#" },

    ],
    aboutUs: [
        { name: "Our Story", href: "#" },
        { name: "Latest News", href: "#" },
        { name: "Career Opportunities", href: "#" },


    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },

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

export default function MenuFoot() {

    return (
        <footer className="flex w-full flex-col   border-white">




        

           
           
                

            <div className="grid grid-cols-4 gap-3">
    <div className="col-span-4 h-10 bg-gray-300"> </div>
    <div className="col-span-2 h-10 bg-gray-400"> </div>
    <div className="col-span-2  h-10 bg-gray-500"> </div>
    <div className="col-span-1 h-10 bg-gray-600"> </div>
    <div className="col-span-1 bg-gray-700"> </div>
    <div className="col-span-1 bg-gray-800"> </div>
    <div className="col-span-1 bg-gray-900"> </div>
</div>


        </footer>
    );
}
