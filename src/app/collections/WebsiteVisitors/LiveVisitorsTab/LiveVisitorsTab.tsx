import {
  ColumnDefinitionType,
} from "@/app/types/components/table";
import { useEffect, useState } from "react";
import { LiveVisitorTableData } from "../../../../../data/WebsiteVisitorData/LiveVisitorData";
import { Table } from "@/app/components/Table/Table";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { Option } from "@/app/types/components/dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LiveVisitorData } from "@/app/types/collections/website-visitor";

export const LiveVisitorsTab = () => {
  const entriesPerPageOptions: Option[] = [
    { value: 5, label: "5 rows" },
    { value: 10, label: "10 rows" },
    { value: 15, label: "15 rows" },
    { value: 20, label: "20 rows" },
  ];
  const [tableData, setTableData] = useState(LiveVisitorTableData);
  const [paginatedData, setPaginatedData] = useState<LiveVisitorData[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    entriesPerPageOptions[0].value
  );
  const [selectedRow, setSelectedRow] = useState<LiveVisitorData | null>(null);

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

  const LiveColumnLabels: ColumnDefinitionType<
    LiveVisitorData,
    keyof LiveVisitorData
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
      header: "Browser",
    },
    {
      key: "ip",
      header: "IP Address",
    },
    {
      key: "time",
      header: "Time",
    },
    {
      key: "ping",
      header: "Ping",
    },
    {
      key: "action",
      header: "Info",
    },
  ];
  const handleRowClick = (row: LiveVisitorData, key: any) => {
    setSelectedRow(row);
    switch (key) {
      case "Ping":
        toast.success(`${row.ip} is pinged successfully!`);
        break;
      case "Info":
        toast.info(`${row.referer} info!`);
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
          columns={LiveColumnLabels}
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
    )
  );
};
