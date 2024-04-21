'use client';

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import List2 from "./list2";
import List3 from "./list3";
import List6 from "./list6";

export default function Nepeantab() {
  const [selected, setSelected] = React.useState("photos");

  const handleTabChange = (newSelected : any) => {
    setSelected(newSelected);
  };

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabChange} // Pass the function here
      >
        <Tab key="photos" title="PANINI">
          <Card>
          <List3   />
          </Card>
        </Tab>
        <Tab key="insalata" title="PINSA">
          <Card>
           <List2   />
          </Card>
        </Tab>
        <Tab key="pasta" title="PASTA">
          <Card>
          {/* <List3   /> */}
          </Card>
        </Tab>
        <Tab key="pinsa" title="PINSA ROMANA">
          <Card>
          {/* <List3   /> */}
          </Card>
        </Tab>
        <Tab key="desserts" title="DESSERTS">
          <Card>
          <List6/>
          </Card>
        </Tab>
  
      </Tabs>
    </div>
  );
}
