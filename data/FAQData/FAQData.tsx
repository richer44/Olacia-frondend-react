import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { FAQData } from "@/app/types/collections/faq";

export const FAQTableData: FAQData[] = [
  {
    id: 1,
    question: "Faq Question 1",
    answer: "Answer 1",
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
    question: "Faq Question 2",
    answer: "Answer 2",
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
    question: "Faq Question 3",
    answer: "Answer 3",
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
    question: "Faq Question 4",
    answer: "Answer 4",
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
    question: "Faq Question 5",
    answer: "Answer 5",
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
    question: "Faq Question 6",
    answer: "Answer 6",
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
