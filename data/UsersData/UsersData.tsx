import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { UserData } from "@/app/types/collections/department";
import Image from "next/image";

export const UserTableData: UserData[] = [
  {
    id: 1,
    name: "Brandon",
    department: "all",
    email: "kenzi.lawson@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 2,
    name: "Marvin",
    department: "sales",
    email: "michelle.rivera@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 3,
    name: "Bernard",
    department: "all",
    email: "tanya.hill@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 4,
    name: "Dustin",
    department: "finance",
    email: "curtis.weaver@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 5,
    name: "Calvin",
    department: "all",
    email: "michael.mitc@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 6,
    name: "Soham",
    department: "sales",
    email: "jessica.hanson@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 7,
    name: "Jacob",
    department: "accounting",
    email: "felicia.reid@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 8,
    name: "Jorge",
    department: "sales",
    email: "nevaeh.simmons@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 9,
    name: "Nathan",
    department: "all",
    email: "debbie.baker@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 10,
    name: "Mitchell",
    department: "sales",
    email: "bill.sanders@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 11,
    name: "Brandon",
    department: "all",
    email: "kenzi.lawson@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 12,
    name: "Marvin",
    department: "sales",
    email: "michelle.rivera@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 13,
    name: "Bernard",
    department: "all",
    email: "tanya.hill@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 14,
    name: "Dustin",
    department: "finance",
    email: "curtis.weaver@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 15,
    name: "Calvin",
    department: "all",
    email: "michael.mitc@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 16,
    name: "Soham",
    department: "sales",
    email: "jessica.hanson@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 17,
    name: "Jacob",
    department: "accounting",
    email: "felicia.reid@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 18,
    name: "Jorge",
    department: "sales",
    email: "nevaeh.simmons@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 19,
    name: "Nathan",
    department: "all",
    email: "debbie.baker@example.com",
    adminAccess: "no",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
  {
    id: 20,
    name: "Mitchell",
    department: "sales",
    email: "bill.sanders@example.com",
    adminAccess: "yes",
    analytics: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <Image
          src="/icons/analytics-graph-icon.svg"
          alt="analytics-graph-icon"
          width={100}
          height={100}
          className="w-[16px] h-[16px]"
        />
      </div>
    ),
    edit: (
      <div className="bg-indigo-blue bg-opacity-10 p-2 rounded w-fit cursor-pointer">
        <BiSolidEdit size={20} color="#1F3374" />
      </div>
    ),
    delete: (
      <div
        className="p-2 rounded w-fit cursor-pointer"
        style={{ backgroundColor: "#fb36401a" }}
      >
        <RiDeleteBin6Line size={18} color="#FB3640" />
      </div>
    ),
  },
];
