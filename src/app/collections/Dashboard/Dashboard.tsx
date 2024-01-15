import { DashboardStatsCard } from "@/app/components/Card/DashboardStatsCard/DashboardStatsCard";
import React from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiChatAlt2, HiUserAdd } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import HistogramChart from "./HistogramChart/HistogramChart";
import MultiLineChart from "./MultiLineChart/MultiLineChart";
import { HistoryTable } from "./HistoryTable/HistoryTable";
import { LatestBlogData } from "../../../../data/LatestBlogData/LatestBlogData";
import { LatestUpdateBox } from "./LatestUpdateBox/LatestUpdateBox";

export const Dashboard = () => {
  // const chartData = {
  //   dates: [
  //     "2023-01-01",
  //     "2023-01-02",
  //     "2023-01-03",
  //     "2023-03-12",
  //     "2023-04-23",
  //     "2023-06-18",
  //   ],
  //   messages: [50, 30, 20, 10, 34, 56],
  //   visitors: [100, 80, 50, 12, 24, 35],
  //   chats: [30, 20, 10, 12, 23, 34],
  // };

  const chartData = {
    dates: [
      "2023-01-01",
      "2023-01-02",
      "2023-01-03",
      "2023-03-12",
      "2023-04-23",
      "2023-06-18",
    ],
    messages: [50, 30, 20, 10, 34, 56],
    visitors: [100, 80, 50, 12, 24, 35],
    chats: [30, 20, 10, 12, 23, 34],
  };

  const dashboardStats = [
    {
      title: "Visitor",
      count: 2000,
      icon: <HiMiniUserGroup size={20} color="#1F3374" />,
      dayStats: 12.05,
      countStats: 12.05,
    },
    {
      title: "Chats",
      count: 120,
      icon: <HiChatAlt2 size={20} color="#1F3374" />,
      dayStats: 12.05,
      countStats: -12.05,
    },
    {
      title: "Page Views",
      count: 3610,
      icon: <AiFillEye size={20} color="#1F3374" />,
      dayStats: 12.05,
      countStats: -7.05,
    },
    {
      title: "New Visitors",
      count: 120,

      icon: <HiUserAdd size={20} color="#1F3374" />,
      dayStats: -12.05,
      countStats: -6.05,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-black text-xl font-semibold font-inter tracking-tight">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="grid grid-cols-2 gap-4">
          {dashboardStats.map((card) => (
            <DashboardStatsCard
              title={card.title}
              icon={card.icon}
              dayStats={card.dayStats}
              countStats={card.countStats}
              count={card.count}
            />
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-cardLightShadow border border-gray-200 flex flex-col py-4 px-5 gap-2">
          <div className="text-black text-base font-semibold tracking-tight">
            Live Visitors
          </div>
          <div className="text-indigo-blue text-3xl font-bold">120</div>
          <div>
            <MultiLineChart
              data={chartData.dates.map((date, index) => ({
                date,
                messages: chartData.messages[index],
                visitors: chartData.visitors[index],
                chats: chartData.chats[index],
              }))}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="bg-white rounded-lg shadow-cardLightShadow border border-gray-200 flex flex-col py-4 px-5 gap-4 overflow-x-auto">
          <div className="text-black text-base font-semibold tracking-tight">
            History
          </div>
          <HistoryTable />
        </div>
        <div className="bg-white rounded-lg shadow-cardLightShadow border border-gray-200 flex flex-col py-4 px-5 gap-6">
          <div className="text-black text-base font-semibold tracking-tight">
            What's The Latest
          </div>
          <div className="flex flex-col gap-10 h-[640px] xl:h-[750px] overflow-y-scroll no-scrollbar">
            {LatestBlogData.map((item) => (
              <LatestUpdateBox item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
