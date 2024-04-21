import React, { useMemo, useState } from "react";
import { Tabs, Tab, Card, Spinner } from "@nextui-org/react";
import List2 from "./list2";
import List3 from "./list3";
import List4 from "./list4";
import List5 from "./list5";
import List6 from "./list6";
import List7 from "./list7";

// Define a type for tab components
interface TabComponent {
  key: string;
  title: string;
  component: JSX.Element;
}

const tabData: TabComponent[] = [
  { key: "pinsa", title: "PINSA ROMANA", component: <List2 /> },
  { key: "photos", title: "ANTIPASTI", component: <List4 /> },
  { key: "insalata", title: "INSALATA", component: <List5 /> },
  { key: "pasta", title: "PASTA", component: <List7 /> },
  { key: "desserts", title: "DESSERTS", component: <List6 /> },
];

export default function CombinedTab() {
  const [selected, setSelected] = useState<string>(tabData[0].key);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
    return () => clearTimeout(timer);
  }, []);



  const handleTabChange = (newSelected: string | number) => {
    setSelected(newSelected as string);
    setLoading(true); // Show loading indicator
  };

  // Cache the lists using useMemo
  const cachedLists = useMemo(() => {
    return tabData.reduce((acc, tab) => {
      acc[tab.key] = tab.component;
      return acc;
    }, {} as { [key: string]: JSX.Element });
  }, []);

  return (
    <div className="flex w-full flex-col px-0">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabChange}
        className="focus:outline-none"
      >
        {tabData.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            <Card>
              {loading ? (
                <Spinner  />
              ) : (
                <>{cachedLists[tab.key]}</>
              )}
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
