import { ColumnDefinitionType } from "@/app/types/components/table";
import { useEffect, useState } from "react";
import { Table } from "@/app/components/Table/Table";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Option } from "@/app/types/components/dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DepartmentTableData } from "../../../../../data/DepartmentData/DepartmentData";
import {
  DepartmentData,
  DepartmentTabProps,
} from "@/app/types/collections/department";
import { Modal } from "@/app/components/Modal/Modal";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DepartmentDetailsModalBody } from "./DepartmentDetailsModalBody/DepartmentDetailsModalBody";

export const DepartmentTab: React.FC<DepartmentTabProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const entriesPerPageOptions: Option[] = [
    { value: 5, label: "5 rows" },
    { value: 10, label: "10 rows" },
    { value: 15, label: "15 rows" },
    { value: 20, label: "20 rows" },
  ];
  const [tableData, setTableData] = useState(DepartmentTableData);
  const [paginatedData, setPaginatedData] = useState<DepartmentData[]>([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Update formData and formErrors
  const [formData, setFormData] = useState({
    title: "",
    faqUrl: "",
    department: "all", // Add department field
    message: "",
    members: 0,
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    faqUrl: "",
    department: "", // Add department error field
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
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

  const handleUpdateDepartment = () => {
    // Validate form fields before adding to the tableData
    if (
      !formData.title ||
      !formData.faqUrl ||
      !formData.department ||
      !formData.email
    ) {
      setFormErrors({
        title: formData.title ? "" : "Title is required*",
        faqUrl: formData.faqUrl ? "" : "Faq Url is required*",
        department: formData.department ? "" : "Department is required*",
        email: formData.email ? "" : "Email is required*",
      });
      return;
    }

    // Update the selected row's data in the tableData state (adjust structure as needed)
    setPaginatedData((prevData) =>
      prevData.map((data) =>
        data.id === selectedRow?.id
          ? {
              ...data,
              title: formData.title,
              faqUrl: formData.faqUrl,
              department: formData.department,
              message: formData.message,
              members: formData.members,
              email: formData.email,
            }
          : data
      )
    );
    toast.success(`Department Details has been updated successfully!`);
    handleCancel();
  };

  const handleAddDepartment = () => {
    // Validate form fields (including department)
    if (
      !formData.title ||
      !formData.faqUrl ||
      !formData.department ||
      !formData.email
    ) {
      setFormErrors({
        title: formData.title ? "" : "Title is required*",
        faqUrl: formData.faqUrl ? "" : "Faq Url is required*",
        department: formData.department ? "" : "Department is required*",
        email: formData.email ? "" : "Email is required*",
      });
      return;
    }

    // Add new department to tableData (adjust structure as needed)
    const newDepartment: DepartmentData = {
      id: tableData.length + 1,
      title: formData.title,
      faqUrl: formData.faqUrl,
      departmentName: formData.department,
      message: formData.message,
      members: formData.members,
      email: formData.email,
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

    setTableData((prevData) => [newDepartment, ...prevData]);
    toast.success("Department has been added!");

    handleCancel();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setFormData({
      title: "",
      faqUrl: "",
      department: "all", // Add department field
      message: "",
      members: 0,
      email: "",
    });
    setSelectedRow(null);
  };

  const handleDelete = (row: DepartmentData) => {
    setTableData((prevData) => prevData.filter((data) => data.id !== row.id));
    setIsDeleteModalOpen(false);
    toast.success(`Department has been deleted successfully!`);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    entriesPerPageOptions[0].value
  );
  const [selectedRow, setSelectedRow] = useState<DepartmentData | null>(null);

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

  const DepartmentColumnLabels: ColumnDefinitionType<
    DepartmentData,
    keyof DepartmentData
  >[] = [
    {
      key: "title",
      header: "Title",
    },
    {
      key: "faqUrl",
      header: "FAQUrl",
    },
    {
      key: "departmentName",
      header: "Department",
    },
    {
      key: "members",
      header: "Members",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "message",
      header: "Message",
      width: 500,
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
  const handleRowClick = (row: DepartmentData, key: any) => {
    switch (key) {
      case "Edit":
        setSelectedRow(row);
        setFormData({
          ...formData,
          title: row.title,
          faqUrl: row.faqUrl,
          department: row.departmentName,
          message: row.message,
          members: row.members,
          email: row.email,
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
    // Content for Live Visitors tab
    tableData.length > 0 ? (
      <div className="p-6">
        <Table
          columns={DepartmentColumnLabels}
          data={paginatedData}
          onRowClick={handleRowClick} // Pass the onRowClick handler
        />
        <Pagination
          totalEntries={tableData.length}
          entriesPerPageOptions={entriesPerPageOptions}
          onPageChange={handlePageChange}
          onEntriesPerPageChange={handleEntriesPerPageChange}
        />
        {isModalOpen && (
          <Modal
            header={selectedRow ? "Edit Department" : "Add Department"}
            body={
              <DepartmentDetailsModalBody
                formData={formData}
                formErrors={formErrors}
                handleInputChange={handleInputChange}
                setFormData={setFormData}
              />
            }
            onClose={handleCancel} // Close the modal on cancel
            footerButtons={[
              { label: "Cancel", onClick: handleCancel, type: "secondary" },
              {
                label: selectedRow ? "Save" : "Add",
                onClick: selectedRow
                  ? handleUpdateDepartment
                  : handleAddDepartment,
                type: "primary",
              },
            ]}
            modalWidth="w-[900px]"
          />
        )}

        {/* Delete confirmation modal */}
        {isDeleteModalOpen && (
          <Modal
            header="Delete Department"
            body="Are you sure you want to delete this Department?"
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
            modalWidth="w-[600px]"
          />
        )}
      </div>
    ) : (
      <div className="p-6">
        <p className="text-sm text-indigo-blue text-center font-semibold">
          No Data Available
        </p>
      </div>
    )
  );
};
