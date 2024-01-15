import { TableHeaderProps } from "@/app/types/components/table";
import React from "react";

export const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>): JSX.Element => {
  return (
    <thead className="bg-slate-50">
      <tr>
        {columns.map((column, index) => {
          const style = {
            width: column.width ?? 100, // 100 is our default value if width is not defined
          };

          return (
            <th
              key={`headCell-${index}`}
              style={style}
              className={`py-4 px-6 ${index == 0 && "rounded-tl-xl"} ${
                index == columns.length - 1 && "rounded-tr-xl"
              }`}
            >
              <div className={`text-indigo-900 text-sm flex font-bold ${index == 0 ? 'items-start': 'items-center justify-center'}`}>
                {column.header}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
