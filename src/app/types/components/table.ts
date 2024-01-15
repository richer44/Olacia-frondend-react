import { Option } from "./dropdown";

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
};

export type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  onRowClick: (row: T, key: T) => void
};

export type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

export type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  onRowClick: (row: T,  key: T) => void
};

export interface PaginationProps {
  totalEntries: number;
  entriesPerPageOptions: Option[];
  onPageChange: (page: number) => void;
  onEntriesPerPageChange: (value: number) => void;
}
