import { ColumnDefinitionType } from "@/app/types/components/table";
import { useEffect, useState } from "react";
import { Table } from "@/app/components/Table/Table";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Option } from "@/app/types/components/dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  DepartmentTabProps,
  UserData,
} from "@/app/types/collections/department";
import { Modal } from "@/app/components/Modal/Modal";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { UserDetailsModalBody } from "./UserDetailsModalBody/UserDetailsModalBody";
import { UserTableData } from "../../../../../data/UsersData/UsersData";
import { BsGraphUpArrow } from "react-icons/bs";
import Image from "next/image";

export const UsersTab: React.FC<DepartmentTabProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const entriesPerPageOptions: Option[] = [
    { value: 5, label: "5 rows" },
    { value: 10, label: "10 rows" },
    { value: 15, label: "15 rows" },
    { value: 20, label: "20 rows" },
  ];
  const [tableData, setTableData] = useState(UserTableData);
  const [paginatedData, setPaginatedData] = useState<UserData[]>([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Update formData and formErrors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    adminAccess: "no",
    department: "all",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
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
    if (!formData.name || !formData.email) {
      setFormErrors({
        name: formData.department ? "" : "Name is required*",
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
              name: formData.name,
              adminAccess: formData.adminAccess,
              department: formData.department,
              email: formData.email,
            }
          : data
      )
    );
    toast.success(`User Details has been updated successfully!`);
    handleCancel();
  };

  const handleAddDepartment = () => {
    // Validate form fields (including department)
    if (!formData.name || !formData.email) {
      setFormErrors({
        name: formData.department ? "" : "Name is required*",
        email: formData.email ? "" : "Email is required*",
      });
      return;
    }

    // Add new department to tableData (adjust structure as needed)
    const newUser: UserData = {
      id: tableData.length + 1,
      name: formData.name,
      adminAccess: formData.adminAccess,
      department: formData.department,
      email: formData.email,
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
    };

    setTableData((prevData) => [newUser, ...prevData]);
    toast.success("New User has been added!");

    handleCancel();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setFormData({
      name: "",
      email: "",
      adminAccess: "no",
      department: "all",
    });
    setSelectedRow(null);
  };

  const handleDelete = (row: UserData) => {
    setTableData((prevData) => prevData.filter((data) => data.id !== row.id));
    setIsDeleteModalOpen(false);
    toast.success(`User has been deleted successfully!`);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    entriesPerPageOptions[0].value
  );
  const [selectedRow, setSelectedRow] = useState<UserData | null>(null);

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
    UserData,
    keyof UserData
  >[] = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "department",
      header: "Department",
    },
    {
      key: "adminAccess",
      header: "Super Admin Access",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "analytics",
      header: "Analytics",
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
  const handleRowClick = (row: UserData, key: any) => {
    switch (key) {
      case "Edit":
        setSelectedRow(row);
        setFormData({
          ...formData,
          name: row.name,
          email: row.email,
          adminAccess: row.adminAccess,
          department: row.department,
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
            header={selectedRow ? "Edit User" : "Add New User"}
            body={
              <UserDetailsModalBody
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
                label: selectedRow ? "Save" : "Add New User",
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
            body="Are you sure you want to delete this User?"
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
