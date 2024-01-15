import React from "react";
import { HistoryTableData } from "../../../../../data/HistoryTableData/HistoryTableData";
import Image from "next/image";

export const HistoryTable = () => {
  return (
    <table className="table-auto w-full border-collapse h-[640px] overflow-y-scroll no-scrollbar">
      <thead>
        <tr>
          <th className="Date text-neutral-900 text-opacity-25 text-[14px] font-semibold tracking-tight">
            Location
          </th>
          <th className="Date text-neutral-900 text-opacity-25 text-[14px] font-semibold tracking-tight">
            Referer
          </th>
          <th className="Date text-neutral-900 text-opacity-25 text-[14px] font-semibold tracking-tight">
            IP Address
          </th>
          <th className="Date text-neutral-900 text-opacity-25 text-[14px] font-semibold tracking-tight">
            First Visit
          </th>
        </tr>
      </thead>
      <tbody>
        {HistoryTableData.map((item, index) => (
          <tr key={index}>
            <td className="text-black text-xs font-rubik tracking-tight py-4">
              <div className="flex justify-center">
                <Image
                  src={item.location}
                  alt="flag"
                  height={100}
                  width={100}
                  className="w-[20px] h-[20px]"
                />
              </div>
            </td>
            <td className="text-black text-xs font-rubik tracking-tight py-4">
              <div className="flex justify-center">{item.referer}</div>
            </td>
            <td className="text-black text-xs font-rubik tracking-tight py-4">
              <div className="flex justify-center">{item.ipAddress}</div>
            </td>
            <td className="text-black text-xs font-rubik tracking-tight py-4">
              <div className="flex justify-center">{item.firstVisit}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
