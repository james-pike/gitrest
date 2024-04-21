'use client';

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Antipasti from "./antipasti";

import List2 from "./list2";
import List3 from "./list3";

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
            {/* <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody> */}
          </Card>
        </Tab>
        <Tab key="beverages" title="BEVERAGES">
          <Card>
            {/* <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody> */}
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
