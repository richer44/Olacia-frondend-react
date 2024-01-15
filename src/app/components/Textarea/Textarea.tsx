import { TextareaProps } from "@/app/types/components/form";
import React from "react";

export const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
  rows,
  name,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="border-stone-300 border text-sm p-4 rounded-lg focus:outline-none focus:border-indigo-blue"
      name={name}
    />
  );
};
