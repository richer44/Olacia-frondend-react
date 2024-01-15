import Tag from "@/app/components/Tag/Tag";
import React, { useState } from "react";
import { LiveVisitorTableData } from "../../../../data/WebsiteVisitorData/LiveVisitorData";
import { LiveVisitorsTab } from "./LiveVisitorsTab/LiveVisitorsTab";
import { OnlineVisitorsTab } from "./OnlineVisitorsTab/OnlineVisitorsTab";
import { OnlineVisitorTableData } from "../../../../data/WebsiteVisitorData/OnlineVisitorData";

export const WebsiteVisitors = () => {
  const [activeTab, setActiveTab] = useState("live");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-black text-xl font-semibold font-inter tracking-tight">
        Website Visitors
      </h1>
      <div className="bg-white border border-neutral-200 rounded-2xl">
        <div className="flex border-b border-b-gray-200">
          <div
            onClick={() => handleTabClick("live")}
            className={`cursor-pointer text-center p-4 text-base leading-none flex items-center ${
              activeTab === "live"
                ? "text-cyan-blue font-semibold border-b border-b-cyan-blue"
                : "text-gray-500"
            }`}
          >
            Live Visitors
            <div className="ml-2 text-indigo-blue">
              <Tag text={LiveVisitorTableData.length.toString()} />
            </div>
          </div>
          <div
            onClick={() => handleTabClick("online")}
            className={`cursor-pointer text-center p-4 text-base leading-none flex items-center ${
              activeTab === "online"
                ? "text-cyan-blue font-semibold border-b border-b-cyan-blue"
                : "text-gray-500"
            }`}
          >
            Online Visitors
            <div className="ml-2 text-indigo-blue">
              <Tag text={OnlineVisitorTableData.length.toString()} />
            </div>
          </div>
        </div>

        {activeTab === "live" && <LiveVisitorsTab />}

        {activeTab === "online" && <OnlineVisitorsTab />}
      </div>
    </div>
  );
};
