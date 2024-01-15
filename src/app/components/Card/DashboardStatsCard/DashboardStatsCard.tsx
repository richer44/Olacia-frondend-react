import { DashboardStatsCardProps } from "@/app/types/components/card";
import Image from "next/image";
import React from "react";

export const DashboardStatsCard: React.FC<DashboardStatsCardProps> = ({
  title,
  icon,
  count,
  dayStats,
  countStats,
}) => {
  return (
    <div className=" bg-white rounded-lg shadow-cardLightShadow border border-gray-200 p-4 ">
      <div className="flex flex-row gap-3 mb-6 items-center">
        {icon}
        <h4 className="text-neutral-900 text-xs tracking-tight font-medium">
          {title}
        </h4>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="text-neutral-900 text-xs font-normal tracking-tight">
            Today
          </div>
          <div className="text-indigo-900 text-3xl font-bold flex gap-2 items-baseline">
            {count}
            <span
              className={`${
                countStats > 0 ? "text-green" : "text-red"
              }  text-xs font-normal tracking-tight flex items-center`}
            >
              <Image
                src={
                  countStats > 0
                    ? "/icons/green-upward-arrow.svg"
                    : "/icons/red-downward-arrow.svg"
                }
                alt="green-arrow"
                width={100}
                height={100}
                className="mr-1 w-[16px] h-[16px]"
              />
              {countStats > 0 ? countStats : -1 * countStats}
            </span>
          </div>
        </div>
        <div className="text-neutral-900 text-xs font-normal tracking-tight flex gap-2 items-center">
          7 Days
          <span
            className={`${
              dayStats > 0 ? "text-green" : "text-red"
            }  text-xs font-normal tracking-tight flex items-center`}
          >
            <Image
              src={
                dayStats > 0
                  ? "/icons/green-upward-arrow.svg"
                  : "/icons/red-downward-arrow.svg"
              }
              alt="green-arrow"
              width={100}
              height={100}
              className="mr-1 w-[16px] h-[9px]"
            />
            {dayStats > 0 ? dayStats : -1 * dayStats}
          </span>
        </div>
      </div>
    </div>
  );
};
