import { motion } from "framer-motion";
import Image from "next/image";
import React from "react"; // Import React for JSX usage

interface TabProps {
  tabs: { id: string | any; label: string; icon: JSX.Element }[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
    <h6 className="text-sm p-5 pb-3">Main Menu</h6>
    <ul className="flex flex-col space-y-2 mx-5 pb-2 border-b-2 border-foreground/15">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          onClick={() => setActiveTab(tab?.label)}
          className={`${
            activeTab === tab?.label
              ? "text-white"
              : "text-foreground hover:text-foreground/60"
          } relative flex flex-nowrap items-center gap-2 cursor-pointer rounded-full px-5 py-1.5 text-sm font-medium transition focus-visible:outline-2`}
        >
          {activeTab === tab?.label && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 gap-x-2 rounded-full bg-foreground shadow-lg"
              transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
            />
          )}
          <span className="z-20 text-2xl">{tab?.icon}</span>
          <span className="z-20">{tab?.label}</span>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Tab;
