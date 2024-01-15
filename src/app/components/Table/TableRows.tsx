import React from "react";
import { TableRowsProps } from "@/app/types/components/table";

export const TableRows = <T, K extends keyof T>({
  data,
  columns,
  onRowClick,
}: TableRowsProps<T, K>): JSX.Element => {
  const rows = data.map((row, index) => {
    return (
      <tr
        key={`row-${index}`}
        className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
      >
        {columns.map((column, index2) => {
          return (
            <td
              key={`cell-${index2}`}
              className="py-3 px-6"
              onClick={() => onRowClick(row, column.header as unknown as T)}
            >
              <div className={`flex ${index2 == 0 ? 'justify-start': 'justify-center'} items-center`}>
                {renderCell(row[column.key] as unknown as string)}
              </div>
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

// Helper function to safely render cell content
const renderCell = (content: React.ReactNode): React.ReactNode => {
  return content !== undefined && content !== null ? content : "-";
};
