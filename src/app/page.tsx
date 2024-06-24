"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Tab from "@/components/tabFilteration/Tab";
import TabContent from "@/components/tabFilteration/TabContent";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLogout, CiSettings } from "react-icons/ci";
import { dashboard } from "@/data/dashboard";

function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(tab || "Dashboard");

  useEffect(() => {
    if (
      tab &&
      tab !== activeTab &&
      dashboard.tabs.some((t) => t.label === tab)
    ) {
      setActiveTab(tab);
    }
  }, [tab, activeTab]);

  const handleTabClick = (tabLabel: any) => {
    setActiveTab(tabLabel);
    router.push(`/?tab=${encodeURIComponent(tabLabel)}`);
  };

  return (
    <section className="relative grid grid-cols-12">
      <aside className="col-span-2 min-h-screen border-r-2 border-foreground/15 max-sm:hidden">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-foreground p-5">
          <div className="rounded-lg bg-white px-2 py-1">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-white">DIYguru.org</span>
        </div>
        {/* Tabs */}
        <Tab
          tabs={dashboard?.tabs}
          activeTab={activeTab}
          setActiveTab={handleTabClick}
        />
        <h6 className="m-5 mb-3 mt-16 text-sm">Preference</h6>
        <ul className="flex flex-col space-y-2 px-5 pb-2">
          <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
            <IoPersonCircleOutline className="text-2xl" /> Profile
          </li>
          <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
            <CiSettings className="text-2xl" /> Settings
          </li>
          <li className="flex cursor-pointer items-center gap-2 px-5 py-1.5">
            <CiLogout className="text-2xl" /> Log Out
          </li>
        </ul>
      </aside>
      {/* Tab Content */}
      <main className="col-span-10 max-h-screen overflow-y-scroll p-5 sm:p-10 max-sm:col-span-12">
        {dashboard?.tabs.map((tab) =>
          tab?.label === activeTab ? (
            <React.Fragment key={tab?.id}>
              <TabContent activeTab={tab} />
            </React.Fragment>
          ) : null
        )}
      </main>
    </section>
  );
}

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
