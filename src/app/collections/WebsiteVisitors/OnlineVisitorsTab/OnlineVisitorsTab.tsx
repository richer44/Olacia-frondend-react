import {
  ColumnDefinitionType,
} from "@/app/types/components/table";
import { useEffect, useState } from "react";
import { Table } from "@/app/components/Table/Table";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Option } from "@/app/types/components/dropdown";
import { OnlineVisitorTableData } from "../../../../../data/WebsiteVisitorData/OnlineVisitorData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OnlineVisitorData } from "@/app/types/collections/website-visitor";
import { Modal } from "@/app/components/Modal/Modal";

export const OnlineVisitorsTab = () => {
  const entriesPerPageOptions: Option[] = [
    { value: 5, label: "5 rows" },
    { value: 10, label: "10 rows" },
    { value: 15, label: "15 rows" },
    { value: 20, label: "20 rows" },
  ];

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [tableData, setTableData] = useState(OnlineVisitorTableData);
  const [paginatedData, setPaginatedData] = useState<OnlineVisitorData[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    entriesPerPageOptions[0].value
  );
  const [selectedRow, setSelectedRow] = useState<OnlineVisitorData | null>(null);

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

  const OnlineColumnLabels: ColumnDefinitionType<
    OnlineVisitorData,
    keyof OnlineVisitorData
  >[] = [
    {
      key: "location",
      header: "Location",
    },
    {
      key: "referer",
      header: "Referer",
    },
    {
      key: "browser",
      header: "Browser/System",
    },
    {
      key: "ip",
      header: "Hits IP",
    },
    {
      key: "firstVisit",
      header: "First Visit",
    },
    {
      key: "time",
      header: "Time on Website",
    },
    {
      key: "action",
      header: "Delete",
    },
  ];

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedRow) {
      setTableData((prevData) => prevData.filter((data) => data.id !== selectedRow.id));
      closeDeleteModal();
      setSelectedRow(null);
      toast.success("This record has been deleted successfully!");
    }
  };

  const handleRowClick = (row: OnlineVisitorData, key: any) => {
    setSelectedRow(row);
    if (key === "Delete") {
      openDeleteModal();
    }
  };
  return tableData.length > 0 ? (
    <div className="p-6">
      <Table
        columns={OnlineColumnLabels}
        data={paginatedData}
        onRowClick={handleRowClick} // Pass the onRowClick handler
      />
      <Pagination
        totalEntries={tableData.length}
        entriesPerPageOptions={entriesPerPageOptions}
        onPageChange={handlePageChange}
        onEntriesPerPageChange={handleEntriesPerPageChange}
      />
         {isDeleteModalOpen && (
        <Modal
          header="Delete Record"
          body="Are you sure you want to delete this record?"
          onClose={closeDeleteModal}
          footerButtons={[
            {
              label: "Cancel",
              onClick: closeDeleteModal,
              type: "secondary",
            },
            {
              label: "Confirm",
              onClick: handleDelete,
              type: "danger",
            },
          ]}
        />
      )}
    </div>
  ) : (
    <div className="p-6">
      <p className="text-sm text-indigo-blue text-center font-semibold">
        No Data Available
      </p>
    </div>
  );
};
