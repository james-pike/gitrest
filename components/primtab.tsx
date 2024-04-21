'use client';

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import List2 from "./list2";
import List4 from "./list4";
import List5 from "./list5";
import List6 from "./list6";
import List7 from "./list7";

export default function Primtab() {
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
        <Tab key="photos" title="ANTIPASTI">
          <Card>
          <List4   />
          </Card>
        </Tab>
        <Tab key="insalata" title="INSALATA">
          <Card>
           <List5   />
          </Card>
        </Tab>

        <Tab key="pinsa" title="PINSA ROMANA">
          <Card>
          <List2   />
          </Card>
        </Tab>

        <Tab key="desserts" title="DESSERTS">
          <Card>
            <List6   />
          </Card>
        </Tab>
        <Tab key="pasta" title="PASTA">
          <Card>
        <List7   />
          </Card>
        </Tab>
        
   
      </Tabs>
    </div>
  );
}
