import { LatestUpdateBoxProps } from "@/app/types/collections/dashboard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LatestUpdateBox: React.FC<LatestUpdateBoxProps> = ({ item }) => {
  return (
    <div className="flex flex-row gap-3 cursor-pointer items-center">
      <Image
        src={item.image}
        alt={item.image}
        width={100}
        height={100}
        className="w-[160px] h-[160px] rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-black text-base font-medium font-rubik tracking-tight">
            {item.title}
          </h3>
          <span className="text-xs text-gray-500">{item.subTitle}</span>
        </div>

        <p className=" text-neutral-900 text-sm font-normal tracking-tight h-[63px] overflow-hidden">
          {item.description}
        </p>
        <Link
          href={item.link}
          className="text-dull-blue hover:underline text-sm"
        >
          {item.linkText}
        </Link>
      </div>
    </div>
  );
};
