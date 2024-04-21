"use client";

import React from "react";



import PlaceListItem from "./place-list-item";
import { cn } from "@/cn";
import pastas from "./pastas";

export default function List7({className}: {className?: string}) {
  return (

    
    <div
      className={cn(
        "my-auto mx-auto grid max-w-7xl grid-cols-2 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className,
      )}
    >
      {pastas.map((pastas) => (
        <PlaceListItem className=""    key={pastas.id} {...pastas} />
      ))}
    </div>
  );
}
