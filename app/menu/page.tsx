'use client'


import React, { useEffect } from "react";


export default function MenuPage() {


  useEffect(() => {
    // This is a hack to make sure the page is scrolled to the top when it's loaded
    window.scrollTo(0, 0);
  }, []);

  


  return (
    <div>
      <h1>Wellington Menu</h1>
      {/* <p>{menuContent[selectedLocation]}</p> */}
    </div>
  );
}
