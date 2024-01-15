import { Dropdown } from "@/app/components/Dropdown/Dropdown";
import { InputField } from "@/app/components/InputField/InputField";
import { Label } from "@/app/components/Label/Label";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { DepartmentForm } from "@/app/types/collections/department";
import { ModalBodyProps } from "@/app/types/components/modal";
import React, { useEffect } from "react";
import { Option } from "@/app/types/components/dropdown";

export const DepartmentDetailsModalBody: React.FC<
  ModalBodyProps<DepartmentForm>
> = ({ formData, formErrors, handleInputChange, setFormData }) => {
  const departmentOptions: Option[] = [
    { value: "all", label: "All" },
    { value: "sales", label: "Sales" },
    { value: "accounting", label: "Accounting" },
    { value: "finance", label: "Finance" },
  ];

  console.log("form data: ", formData);

  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 w-full">
          <Label title="Title*" />
          <InputField
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleInputChange}
            value={formData.title}
          />
          <span className="text-red text-xs">{formErrors.title}</span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label title="FAQ Url*" />
          <InputField
            type="text"
            name="faqUrl"
            placeholder="Enter FAQ Url"
            onChange={handleInputChange}
            value={formData.faqUrl}
          />
          <span className="text-red text-xs">{formErrors.faqUrl}</span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label title="Department*" />
          <Dropdown
            dropdownWidth="w-[100%]"
            options={departmentOptions}
            selectedValue={formData.department}
            onChange={(selectedValue) => {
              if (selectedValue && setFormData) {
                setFormData({
                  ...formData,
                  department: selectedValue.toString(),
                });
              }
            }}
          />
          <span className="text-red text-xs">{formErrors.department}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 w-full">
          <Label title="Email*" />
          <InputField
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            type="email"
            name="email"
          />
          <span className="text-red text-xs">{formErrors.email}</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label title="Members*" />
          <InputField
            value={formData.members.toString()}
            onChange={handleInputChange}
            placeholder="Enter Members Count"
            name="members"
            type="number"
          />
          <span className="text-red text-xs">{formErrors.members}</span>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-2 w-full">
          <Label title="Message*" />
          <Textarea
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter Message"
            rows={4}
            name="message"
          />
          <span className="text-red text-xs">{formErrors.message}</span>
        </div>
      </div>
    </div>
  );
};
