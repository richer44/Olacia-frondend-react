import Button from "@/app/components/Button/Button";
import React, { useEffect, useState } from "react";
import { Option } from "@/app/types/components/dropdown";
import { ColumnDefinitionType } from "@/app/types/components/table";
import { toast } from "react-toastify";
import { Table } from "@/app/components/Table/Table";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FAQData } from "@/app/types/collections/faq";
import { FAQTableData } from "../../../../data/FAQData/FAQData";
import { Modal } from "@/app/components/Modal/Modal";
import { FAQModalBody } from "./FAQModalBody/FAQModalBody";

export const Faqs = () => {
  const entriesPerPageOptions: Option[] = [
    { value: 5, label: "5 rows" },
    { value: 10, label: "10 rows" },
    { value: 15, label: "15 rows" },
    { value: 20, label: "20 rows" },
  ];
  const [tableData, setTableData] = useState(FAQTableData);
  const [paginatedData, setPaginatedData] = useState<FAQData[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [formErrors, setFormErrors] = useState({
    question: "",
    answer: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Reset errors when input changes
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: "",
    }));
  };

  const handleUpdatePoactive = () => {
    // Validate form fields before adding to the tableData
    if (!formData.question || !formData.answer) {
      setFormErrors({
        question: formData.question ? "" : "FAQ Question is required",
        answer: formData.answer ? "" : "FAQ Answer is required",
      });
      return; // Stop execution if there are validation errors
    }

    // Update the selected row's data in the tableData state
    setPaginatedData((prevData) =>
      prevData.map((data) =>
        data.id === selectedRow?.id
          ? {
              ...data,
              question: formData.question,
              answer: formData.answer,
            }
          : data
      )
    );
    setIsModalOpen(false); // Close the modal after updating
    toast.success(`FAQ has been updated successfully!`);
    setSelectedRow(null);
    setFormData({ question: "", answer: "" });
  };

  const handleAddProactive = () => {
    // Validate form fields before adding to the tableData
    if (!formData.question || !formData.answer) {
      setFormErrors({
        question: formData.question ? "" : "FAQ Question is required",
        answer: formData.answer ? "" : "FAQ Answer is required",
      });
      return; // Stop execution if there are validation errors
    }

    // Add new question to tableData
    const newQuestion: FAQData = {
      id: tableData.length + 1,
      question: formData.question,
      answer: formData.answer,
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
    };

    setTableData((prevData) => [newQuestion, ...prevData]);
    toast.success("FAQ Question has been added!");

    // Close the modal and reset the form data
    setIsModalOpen(false);
    setFormData({
      question: "",
      answer: "",
    });
  };

  const handleAddBotQuestion = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setFormData({ question: "", answer: "" });
    setSelectedRow(null);
  };

  const handleDelete = (row: FAQData) => {
    setTableData((prevData) => prevData.filter((data) => data.id !== row.id));
    setIsDeleteModalOpen(false);
    toast.success(`FAQ has been deleted successfully!`);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    entriesPerPageOptions[0].value
  );
  const [selectedRow, setSelectedRow] = useState<FAQData | null>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (value: string | number) => {
    setEntriesPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * Number(entriesPerPage);
    const endIndex = startIndex + Number(entriesPerPage);

    const currentPageData = tableData.slice(startIndex, endIndex);
    setPaginatedData(currentPageData);
  }, [currentPage, entriesPerPage, tableData.length]);

  const FAQColumnLabels: ColumnDefinitionType<FAQData, keyof FAQData>[] = [
    {
      key: "question",
      header: "FAQ Question",
      width: 100,
    },
    {
      key: "answer",
      header: "FAQ Answer",
    },
    {
      key: "edit",
      header: "Edit",
    },
    {
      key: "delete",
      header: "Delete",
    },
  ];
  const handleRowClick = (row: FAQData, key: any) => {
    switch (key) {
      case "Edit":
        setSelectedRow(row);
        setFormData({
          ...formData,
          question: row.question,
          answer: row.answer,
        });
        setIsModalOpen(true);
        break;
      case "Delete":
        setSelectedRow(row);
        if (row) openDeleteModal();
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-black text-xl font-semibold font-inter tracking-tight">
        Faqs
      </h1>
      <div className="bg-white border border-neutral-200 rounded-2xl">
        <div className="flex border-b border-b-gray-200 flex-col">
          <div className="flex justify-between p-6 pb-0 w-full items-center">
            <h1 className="text-lg font-bold">All FAQs</h1>
            <Button
              type="primary"
              text="Add FAQ Question"
              className="rounded py-2 px-4 text-sm"
              onClick={handleAddBotQuestion}
            />
          </div>

          {tableData.length > 0 ? (
            <div className="p-6">
              <Table
                columns={FAQColumnLabels}
                data={paginatedData}
                onRowClick={handleRowClick} // Pass the onRowClick handler
              />
              <Pagination
                totalEntries={tableData.length}
                entriesPerPageOptions={entriesPerPageOptions}
                onPageChange={handlePageChange}
                onEntriesPerPageChange={handleEntriesPerPageChange}
              />
            </div>
          ) : (
            <div className="p-6">
              <p className="text-sm text-indigo-blue text-center font-semibold">
                No Data Available
              </p>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          header={selectedRow ? "Edit FAQ Question" : "Add FAQ Question"}
          body={
            <FAQModalBody
              formData={formData}
              formErrors={formErrors}
              handleInputChange={handleInputChange}
            />
          }
          onClose={handleCancel} // Close the modal on cancel
          footerButtons={[
            { label: "Cancel", onClick: handleCancel, type: "secondary" },
            {
              label: selectedRow ? "Save" : "Add FAQ",
              onClick: selectedRow ? handleUpdatePoactive : handleAddProactive,
              type: "primary",
            },
          ]}
          modalWidth='w-[700px]'
        />
      )}

      {/* Delete confirmation modal */}
      {isDeleteModalOpen && (
        <Modal
          header="Delete FAQ Question"
          body="Are you sure you want to delete this FAQ?"
          onClose={handleCancel}
          footerButtons={[
            {
              label: "Cancel",
              onClick: handleCancel,
              type: "secondary",
            },
            {
              label: "Confirm",
              onClick: () => selectedRow && handleDelete(selectedRow),
              type: "danger",
            },
          ]}
        />
      )}
    </div>
  );
};
