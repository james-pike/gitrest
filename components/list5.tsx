"use client";

import React from "react";


import insalata from "./insalata";
import PlaceListItem from "./place-list-item";
import { cn } from "@/cn";

export default function List5({className}: {className?: string}) {
  return (

    
    <div
      className={cn(
        "my-auto mx-auto grid max-w-7xl grid-cols-2 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className,
      )}
    >
      {insalata.map((insalata) => (
        <PlaceListItem className=""    key={insalata.id} {...insalata} />
      ))}
    </div>
  );
}
