// MenuItem.tsx
import Image from "next/image";
import React from "react";
import { SubMenuItem } from "../SubMenuItem/SubMenuItem";
import { MenuItemProps } from "@/app/types/components/menu";
import { useRouter } from "next/router";

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  openMenu,
  isActive,
  activeMenu,
  onMenuClick,
}) => {
  const router = useRouter();
  return (
    <li
      key={index}
      className={`cursor-pointer ${
        item.subItems && openMenu == index
          ? "py-3 px-0 bg-[#1f337414] rounded-xl border border-[#afbdee] "
          : `py-3 pl-3 ${
              isActive &&
              "bg-indigo-blue text-white rounded-3xl shadow-activeMenu"
            } `
      } `}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => {
          onMenuClick(item, index);
          item.link && router.push(item.link);
        }}
      >
        <div
          className={`flex items-center text-slate-500 font-semibold  hover:text-cyan-blue transition-colors ${
            item.subItems && openMenu == index
              ? "mb-2 px-3"
              : `mb-0 px-0 ${isActive && "text-white  hover:text-white"}`
          }`}
        >
          <div className={`mr-3`}>
            {React.cloneElement(item.icon, {
              style: {
                color: isActive ? "white" : "#596798",
                opacity: isActive ? "1" : "0.8",
              },
            })}
          </div>
          <span>{item.label}</span>
        </div>
        {item.subItems && (
          <Image
            width={100}
            height={100}
            src={"/icons/blue-arrow-down.svg"}
            alt={"arrow-down"}
            className={`mr-2 w-[14px] h-[14px] transition-transform transform ${
              openMenu == index ? "rotate-0" : "rotate-[-90deg]"
            }`}
          />
        )}
      </div>
      {item.subItems && openMenu == index && (
        <ul
          className={`list-none py-0 px-2 transition-all duration-1000 ${
            openMenu == index
              ? "animate-accordion-down max-h-[300px] "
              : "animate-accordion-up max-h-0 "
          } overflow-hidden`}
        >
          {item.subItems.map((subItem, subIndex) => (
            <SubMenuItem
              key={subItem.id}
              index={subIndex}
              subItem={subItem}
              isActive={activeMenu === subItem.id}
              onMenuClick={(subItem) => onMenuClick(subItem, index)}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
