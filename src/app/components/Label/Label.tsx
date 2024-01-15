import { LabelProps } from "@/app/types/components/form";
import React from "react";

export const Label: React.FC<LabelProps> = ({ title }) => {
  return (
    <p className="text-neutral-500 text-sm font-semibold font-openSans">
      {title}
    </p>
  );
};
