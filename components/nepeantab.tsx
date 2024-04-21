'use client';

import React, { useMemo } from "react";
import { Tabs, Tab, Card } from "@nextui-org/react";
import List2 from "./list2";
import List3 from "./list3";
import List6 from "./list6";

export default function Nepeantab() {
  const [selected, setSelected] = React.useState("photos");

  const handleTabChange = (newSelected: any) => {
    setSelected(newSelected);
  };

  // Cache the lists using useMemo
  const cachedLists = useMemo(() => ({
    photos: <List3 />,
    insalata: <List2 />,
    desserts: <List6 />,
  }), []);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabChange}
        className="focus:outline-none"
      >
        <Tab key="photos" title="PANINI">
          <Card>
            {cachedLists.photos}
          </Card>
        </Tab>
        <Tab key="insalata" title="PINSA ROMANA">
          <Card>
            {cachedLists.insalata}
          </Card>
        </Tab>
        <Tab key="desserts" title="DESSERTS">
          <Card>
            {cachedLists.desserts}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
