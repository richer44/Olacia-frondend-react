import { SubMenuItemProps } from "@/app/types/components/menu";
import { useRouter } from "next/router";
import React from "react";

export const SubMenuItem: React.FC<SubMenuItemProps> = ({
  subItem,
  isActive,
  onMenuClick,
  index,
}) => {
  const router = useRouter();
  return (
    <li
      key={index}
      className={`p-3 ${
        isActive
          ? "bg-indigo-blue text-white rounded-3xl shadow-activeMenu"
          : ""
      }`}
      onClick={() => {
        onMenuClick(subItem, index);
        subItem.link && router.push(subItem.link);
      }}
    >
      <div
        className={`flex items-center cursor-pointer text-slate-500 font-semibold hover:text-cyan-blue transition-colors ${
          isActive
            ? "bg-indigo-blue text-white rounded-3xl shadow-activeMenu hover:text-white"
            : ""
        }`}
      >
        <div className={`mr-2`}>
          {React.cloneElement(subItem.icon, {
            style: {
              color: isActive ? "white" : "#1F3374",
            },
          })}
        </div>
        <span>{subItem.label}</span>
      </div>
    </li>
  );
};
