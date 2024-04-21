'use client ';

import React, { useMemo } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import List2 from "./list2";
import List4 from "./list4";
import List5 from "./list5";
import List6 from "./list6";
import List7 from "./list7";

export default function Primtab() {
  const [selected, setSelected] = React.useState("pinsa");

  const handleTabChange = (newSelected: any) => {
    setSelected(newSelected);
  };

  // Cache the lists using useMemo
  const cachedLists = useMemo(() => ({
    pinsa: <List2 />,
    photos: <List4 />,
    insalata: <List5 />,
    pasta: <List7 />,
    desserts: <List6 />,
  }), []);

  return (
    <div className="flex w-full flex-col px-0">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabChange}
        className="focus:outline-none"
      >
        <Tab key="pinsa" title="PINSA ROMANA" className="focus:outline-none">
          <Card>
            {cachedLists.pinsa}
          </Card>
        </Tab>
        <Tab key="photos" title="ANTIPASTI" className="focus:outline-none">
          <Card>
            {cachedLists.photos}
          </Card>
        </Tab>
        <Tab key="insalata" title="INSALATA" className="focus:outline-none">
          <Card>
            {cachedLists.insalata}
          </Card>
        </Tab>
        <Tab key="pasta" title="PASTA" className="focus:outline-none">
          <Card>
            {cachedLists.pasta}
          </Card>
        </Tab>
        <Tab key="desserts" title="DESSERTS" className="focus:outline-none">
          <Card>
            {cachedLists.desserts}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
