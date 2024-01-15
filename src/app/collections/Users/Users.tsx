import Tag from "@/app/components/Tag/Tag";
import React, { useState } from "react";
import { DepartmentTableData } from "../../../../data/DepartmentData/DepartmentData";
import { DepartmentTab } from "./DepartmentTab/DepartmentTab";
import { UsersTab } from "./UsersTab/UsersTab";
import Button from "@/app/components/Button/Button";

export const Users = () => {
  const [activeTab, setActiveTab] = useState("department");
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className=" text-black text-xl font-semibold font-inter tracking-tight">
          Departments/Users
        </h1>
      </div>
      <div className="bg-white border border-neutral-200 rounded-2xl">
        <div className="flex border-b border-b-gray-200 justify-between px-5 items-center">
          <div className="flex items-center">
            <div
              onClick={() => handleTabClick("department")}
              className={`cursor-pointer text-center p-4 text-base leading-none flex items-center ${
                activeTab === "department"
                  ? "text-cyan-blue font-semibold border-b-2 border-b-cyan-blue"
                  : "text-gray-500"
              }`}
            >
              Departments
              <div className="ml-2 text-indigo-blue">
                <Tag text={DepartmentTableData.length.toString()} />
              </div>
            </div>
            <div
              onClick={() => handleTabClick("user")}
              className={`cursor-pointer text-center p-4 text-base leading-none flex items-center ${
                activeTab === "user"
                  ? "text-cyan-blue font-semibold border-b-2 border-b-cyan-blue"
                  : "text-gray-500"
              }`}
            >
              Users
              <div className="ml-2 text-indigo-blue">
                <Tag text={DepartmentTableData.length.toString()} />
              </div>
            </div>
          </div>
          <Button
            type="primary"
            text={activeTab === "department" ? "Add Department" : "Add New User"}
            className="rounded py-2 px-4 text-sm h-[40px]"
            onClick={() => {
              activeTab === "department"
                ? setIsDepartmentModalOpen(true)
                : setIsUserModalOpen(true);
            }}
          />
        </div>

        {activeTab === "department" && (
          <DepartmentTab
            isModalOpen={isDepartmentModalOpen}
            setIsModalOpen={setIsDepartmentModalOpen}
          />
        )}

        {activeTab === "user" && (
          <UsersTab
            isModalOpen={isUserModalOpen}
            setIsModalOpen={setIsUserModalOpen}
          />
        )}
      </div>
    </div>
  );
};
