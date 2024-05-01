"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";


import ThemeSwitch from "@/theme-switch";

import { ThemeButton } from "./theme-button";
import  Image  from "next/image";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
    services: [
        { name: "Branding", href: "#" },
        { name: "Data Analysis", href: "#" },
        { name: "E-commerce Solutions", href: "#" },
        { name: "Market Research", href: "#" },
    ],
    supportOptions: [
        { name: "Pricing Plans", href: "#" },
        { name: "User Guides", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Service Status", href: "#" },
    ],
    aboutUs: [
        { name: "Our Story", href: "#" },
        { name: "Latest News", href: "#" },
        { name: "Career Opportunities", href: "#" },
        { name: "Media Enquiries", href: "#" },
        { name: "Collaborations", href: "#" },
    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "User Agreement", href: "#" },
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

export default function LocationFooter() {
    const renderList = React.useCallback(
        ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
            <div>
                <h3 className="text-small font-semibold text-default-600">{title}</h3>
                <ul className="mt-6 space-y-4">
                    {items.map((item) => (
                        <li key={item.name}>
                            <Link className="text-default-400" href={item.href} size="sm">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ),
        [],
    );

    return (
        <div>
        <footer className="flex w-full flex-col md:hidden pb-3">
            <div className="" >
              

            <div style={{ position: 'relative', height: '48vh' }}>
<Image
     className=" object-cover w-full "
  src="/images/a6.png"
  alt="{name}"
  quality={50}
  width={440}
  height={0}
  style={{ width: 'full', height: '48vh' }} // optional
  priority
/>
                        <h1
                            style={{
                                position: 'absolute',
                                top: '40%', // Position the h1 in the middle vertically
                                left: '20%', // Position the h1 in the middle horizontally
                                transform: 'translate(-20%, -50%)', // Center the h1
                                color: 'white', // Text color
                                fontSize: '4rem', // Font size
                                zIndex: 10, // Ensure it's above the image
                                lineHeight: '1', // Increase line height for better spacing between lines
                            }}
                        >
                            <span style={{ display: 'block' }}>JOES</span>
                            <span style={{ display: 'block' }}>ITALIAN</span>
                            <span style={{ display: 'block' }}>KITCHEN</span>
                        </h1>
                        <div className="pt-6"
                            style={{
                                position: 'absolute',
                                top: '60%', // Position the buttons below the subtitle
                                left: '20%', // Position the buttons in the middle horizontally
                                transform: 'translateX(-20%)', // Center the buttons horizontally
                                zIndex: 10, // Ensure it's above the image
                            }}
                        >
                            <div className="pt-2" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="/menu">
                                    <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2 text-xs">
                                        ORDERS
                                    </button>
                                </a>
                                <a href="/menu">
                                    <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2 text-xs">
                                        RESERVATIONS
                                    </button>
                                </a>
                                <div className="pt-2"></div>

                            </div>

                        </div>
                    </div>




                    <div className="border-4 border-black"></div>

                    <div style={{ position: 'relative', height: '30vh' }}>
<Image
     className=" object-cover w-full "
  src="/images/g1.jpg"
  alt="{name}"
  quality={50}
  width={440}
  height={0}
  style={{ width: 'full', height: '30vh', opacity: 0.75 }} // optional
  priority
/>
                        <h1
                            style={{
                                position: 'absolute',
                                top: '40%', // Position the h1 in the middle vertically
                                left: '20%', // Position the h1 in the middle horizontally
                                transform: 'translate(-20%, -50%)', // Center the h1
                                color: 'white', // Text color
                                fontSize: '2.4rem', // Font size
                                zIndex: 10, // Ensure it's above the image
                                lineHeight: '1', // Increase line height for better spacing between lines
                            }}
                        >
                            <span style={{ display: 'block' }}>CANADAS</span>
                            <span style={{ display: 'block' }}>CERTIFIED</span>
                            <span style={{ display: 'block' }}>PINSARIA</span>
                        </h1>
                        <div className="pt-6"
                            style={{
                                position: 'absolute',
                                top: '60%', // Position the buttons below the subtitle
                                left: '20%', // Position the buttons in the middle horizontally
                                transform: 'translateX(-20%)', // Center the buttons horizontally
                                zIndex: 10, // Ensure it's above the image
                            }}
                        >
                            <div className="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="/menu">
                                    <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2 text-xs">
                                        BROWSE MENU
                                    </button>
                                </a>
                                <div className="pt-2"></div>

                            </div>

                        </div>
                    </div>


                    <div className="border-6 border-black"></div>



                    <div style={{ position: 'relative', height: '30vh' }}>
<Image
     className=" object-cover w-full "
  src="/images/p1.jpg"
  alt="{name}"
  quality={50}
  width={440}
  height={0}
  style={{ width: 'full', height: '30vh', opacity: 0.75 }} // optional
  priority
/>
                        <h1
                            style={{
                                position: 'absolute',
                                top: '40%', // Position the h1 in the middle vertically
                                left: '20%', // Position the h1 in the middle horizontally
                                transform: 'translate(-20%, -50%)', // Center the h1
                                color: 'white', // Text color
                                fontSize: '2.4rem', // Font size
                                zIndex: 10, // Ensure it's above the image
                                lineHeight: '1', // Increase line height for better spacing between lines
                            }}
                        >
                            <span style={{ display: 'block' }}>CANADAS</span>
                            <span style={{ display: 'block' }}>CERTIFIED</span>
                            <span style={{ display: 'block' }}>PINSARIA</span>
                        </h1>
                        <div className="pt-6"
                            style={{
                                position: 'absolute',
                                top: '60%', // Position the buttons below the subtitle
                                left: '20%', // Position the buttons in the middle horizontally
                                transform: 'translateX(-20%)', // Center the buttons horizontally
                                zIndex: 10, // Ensure it's above the image
                            }}
                        >
                            <div className="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="/menu">
                                    <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2 text-xs">
                                        BROWSE PINSAS
                                    </button>
                                </a>
                                <div className="pt-2"></div>

                            </div>

                        </div>
                    </div>


                    <div className="border-8 border-black"></div>


             


                <div className=" pt-2.5  pb-3 px-4">
                    <div className="space-y-2 ">
                        <div className="flex items-center justify-start">
                            <img    
                                className="h-10 w-auto"
                                src="./images/logo.png"
                                alt="Logo"
                            />
                            <span className="text-medium font-medium px-3">JOES ITALIAN KITCHEN</span>
                        </div>
                        <p className="text-small text-default-500 px-1 pt-1">
                            Lorem ipsum dolor sit amets, consectetur adipiscing elit. Sed neque elit, tristique
                        </p>
                        <div className="flex space-x-6 pt-3">
                            {footerNavigation.social.map((item) => (
                                <Link key={item.name} isExternal className="text-default-400" href={item.href}>
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" className="w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>
            
                </div>


                <div className="flex flex-wrap justify-between gap-2 pt-2.5 px-3">
                    <p className="text-small text-default-400">&copy; 2024 All rights reserved.</p>
                    <ThemeSwitch />
                </div>
            </div>
        </footer>







        
  <footer className="flex w-full pb-7 flex-col max-w-9xl  mx-auto hidden md:block">
  <div className="  " style={{ paddingLeft: '1%', paddingRight: '1%' }}>
      <div style={{ position: 'relative', height: '40vh' }}>
          <video
                className=" object-cover w-full "
                src="/video/almonte1.mp4"
                playsInline
                controls
                
                poster="/images/a6.png"
                
                style={{ width: 'full', height: '40vh' }} // optional
               
            />
          <div className="pt-6"
              style={{
                  position: 'absolute',
                  top: '60%', // Position the buttons below the subtitle
                  left: '20%', // Position the buttons in the middle horizontally
                  transform: 'translateX(-20%)', // Center the buttons horizontally
                  zIndex: 10, // Ensure it's above the image
              }}
          >

          </div>
      </div>

      <div className="border-6 border-black"></div>




      




      <div className="md:grid md:grid-cols-2 gap-4">
          <div style={{ position: 'relative', height: '20em' }}>
              <img
                  className="w-full object-cover border-black"
                  style={{ opacity: 0.75, height: '20em' }}
                  src="./images/g1.jpg"
                  alt="Background Image"
              />
              <h1
                  style={{
                      position: 'absolute',
                      top: '40%', // Position the h1 in the middle vertically
                      left: '20%', // Position the h1 in the middle horizontally
                      transform: 'translate(-20%, -50%)', // Center the h1
                      color: 'white', // Text color
                      fontSize: '2.2rem', // Font size
                      zIndex: 10, // Ensure it's above the image
                      lineHeight: '1', // Increase line height for better spacing between lines
                  }}
              >
                  <span style={{ display: 'block' }}>CANADAS</span>
                  <span style={{ display: 'block' }}>CERTIFIED</span>
                  <span style={{ display: 'block' }}>PINSARIA</span>
              </h1>
              <div className="pt-6"
                  style={{
                      position: 'absolute',
                      top: '60%', // Position the buttons below the subtitle
                      left: '20%', // Position the buttons in the middle horizontally
                      transform: 'translateX(-20%)', // Center the buttons horizontally
                      zIndex: 10, // Ensure it's above the image
                  }}
              >
                  <div className="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
                      <a href="/menu">
                          <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 rounded mr-2 text-xs">
                              BROWSE MENU
                          </button>
                      </a>
                      <div className="pt-2"></div>

                  </div>

              </div>
          </div>
          <div style={{ position: 'relative', height: '20em' }}>
              <img
                  className="w-full object-cover border-black"
                  style={{ opacity: 0.75, height: '20em' }}
                  src="./images/p1.jpg"
                  alt="Background Image"
              />
              <h1
                  // className={title()}
                  style={{
                      position: 'absolute',
                      top: '40%', // Position the h1 in the middle vertically
                      left: '20%', // Position the h1 in the middle horizontally
                      transform: 'translate(-20%, -50%)', // Center the h1
                      color: 'white', // Text color
                      fontSize: '2.2rem', // Font size
                      zIndex: 10, // Ensure it's above the image
                      lineHeight: '1', // Increase line height for better spacing between lines
                  }}
              >
                  <span style={{ display: 'block' }}>CANADAS</span>
                  <span style={{ display: 'block' }}>CERTIFIED</span>
                  <span style={{ display: 'block' }}>PINSARIA</span>
              </h1>
              <div className="pt-6"
                  style={{
                      position: 'absolute',
                      top: '60%', // Position the buttons below the subtitle
                      left: '20%', // Position the buttons in the middle horizontally
                      transform: 'translateX(-20%)', // Center the buttons horizontally
                      zIndex: 10, // Ensure it's above the image
                  }}
              >
                  <div className="pt-1" style={{ display: 'flex', alignItems: 'center' }}>
                      <a href="/menu">
                          <button className="bg-black text-white font-bold py-3 border-white border-1 px-4 text-xs rounded mr-2">
                              BROWSE PINSAS
                          </button>
                      </a>
                      <div className="pt-2"></div>

                  </div>

              </div>
          </div>


      </div>


      <div className="border-4 border-black"></div>


      <div className="xl:grid xl:grid-cols-3 pt-6 xl:gap-8">
          <div className="space-y-8 md:pr-8 px-1">
              <div className="flex items-center justify-start">
                  <img
                        className="h-10 w-auto"
                        src="./images/logo.png"
                        alt="Logo"
                  />
                  <span className="text-medium font-medium px-3">JOES ITALIAN KITCHEN</span>
              </div>
              <p className="text-small text-default-500">
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
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>{renderList({ title: "Services", items: footerNavigation.services })}</div>
                  <div className="mt-10 md:mt-0">
                      {renderList({ title: "Support", items: footerNavigation.supportOptions })}
                  </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>{renderList({ title: "About Us", items: footerNavigation.aboutUs })}</div>
                  <div className="mt-10 md:mt-0">
                      {renderList({ title: "Legal", items: footerNavigation.legal })}
                  </div>
              </div>
          </div>
      </div>


      <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">&copy; 2024 Acme Inc. All rights reserved.</p>
          <ThemeButton      />
      </div>
  </div>
</footer>
        </div>

        
    );
}
