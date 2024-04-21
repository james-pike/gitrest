"use client";

import React from "react";


import desserts from "./desserts";
import PlaceListItem from "./place-list-item";
import { cn } from "@/cn";

export default function List6({className}: {className?: string}) {
  return (

    
    <div
      className={cn(
        "my-auto mx-auto grid max-w-7xl grid-cols-2 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className,
      )}
    >
      {desserts.map((desserts) => (
        <PlaceListItem className=""    key={desserts.id} {...desserts} />
      ))}
    </div>
  );
}
