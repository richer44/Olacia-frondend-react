export interface Option {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  selectedValue: string | number;
  onChange: (selectedValue: string | number) => void;
  dropdownWidth?: string;
}
