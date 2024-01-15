import React from 'react';
import { TableProps } from "@/app/types/components/table";
import { TableHeader } from "./TableHeader";
import { TableRows } from "./TableRows";

const tableStyle = {
  borderCollapse: 'collapse',
  width: "100%"
} as const;

export const Table = <T, K extends keyof T>({ data, columns, onRowClick }: TableProps<T, K>): JSX.Element => {
  return (
    <div className='no-scrollbar max-w-full overflow-x-auto'>
      <table style={tableStyle}>
        <TableHeader columns={columns} />
        <TableRows
          data={data}
          columns={columns}
          onRowClick={onRowClick}
        />
      </table>
    </div>
  );
};
