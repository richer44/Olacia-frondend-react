import { PaginationProps } from "@/app/types/components/table";
import React, { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const Pagination: React.FC<PaginationProps> = ({
  totalEntries,
  entriesPerPageOptions,
  onPageChange,
  onEntriesPerPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(
    entriesPerPageOptions[0].value
  );

  const totalPages = Math.ceil(Number(totalEntries) / Number(entriesPerPage));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleEntriesPerPageChange = (value: string | number) => {
    setEntriesPerPage(Number(value));
    setCurrentPage(1);
    onEntriesPerPageChange(Number(value));
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      const buttonStyle = isActive
        ? "bg-indigo-blue text-white"
        : "bg-white text-black";

      pageButtons.push(
        <button
          key={i}
          className={`rounded-md h-[32px] w-[32px] cursor-pointer ${buttonStyle}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="flex items-center justify-between pt-4">
      <div>
        Showing {(currentPage - 1) * Number(entriesPerPage) + 1} to{" "}
        {Math.min(currentPage * Number(entriesPerPage), Number(totalEntries))}{" "}
        entries
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center mr-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`hover:bg-gray-200 rounded-md p-2 cursor-pointer ${
              currentPage === 1 && "hidden"
            }`}
          >
            <GoChevronLeft />
          </button>
          <div>{renderPageButtons()}</div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`hover:bg-gray-200 rounded-md cursor-pointer p-2 ${
              currentPage === totalPages && "hidden"
            }`}
          >
            <GoChevronRight />
          </button>
        </div>

        <div className="ml-12">
          <span className="mr-2">Show </span>
          <Dropdown
            dropdownWidth="w-[110px]"
            options={entriesPerPageOptions}
            selectedValue={entriesPerPage}
            onChange={(value) => handleEntriesPerPageChange(value)}
          />
        </div>
      </div>
    </div>
  );
};
