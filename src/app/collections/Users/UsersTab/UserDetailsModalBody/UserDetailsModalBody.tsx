import { Dropdown } from "@/app/components/Dropdown/Dropdown";
import { InputField } from "@/app/components/InputField/InputField";
import { Label } from "@/app/components/Label/Label";
import { Textarea } from "@/app/components/Textarea/Textarea";
import { DepartmentForm, UserForm } from "@/app/types/collections/department";
import { ModalBodyProps } from "@/app/types/components/modal";
import React, { useEffect } from "react";
import { Option } from "@/app/types/components/dropdown";

export const UserDetailsModalBody: React.FC<ModalBodyProps<UserForm>> = ({
  formData,
  formErrors,
  handleInputChange,
  setFormData,
}) => {
  const departmentOptions: Option[] = [
    { value: "all", label: "All" },
    { value: "sales", label: "Sales" },
    { value: "accounting", label: "Accounting" },
    { value: "finance", label: "Finance" },
  ];

  const adminAccessOptions: Option[] = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        <div className="flex flex-col gap-2 w-full">
          <Label title="Name*" />
          <InputField
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleInputChange}
            value={formData.name}
          />
          <span className="text-red text-xs">{formErrors.name}</span>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label title="Email*" />
          <InputField
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleInputChange}
            value={formData.email}
          />
          <span className="text-red text-xs">{formErrors.email}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 w-full">
          <Label title="Department" />
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

        <div className="flex flex-col gap-2 w-full">
          <Label title="Admin Access" />
          <Dropdown
            dropdownWidth="w-[100%]"
            options={adminAccessOptions}
            selectedValue={formData.adminAccess}
            onChange={(selectedValue) => {
              if (selectedValue && setFormData) {
                setFormData({
                  ...formData,
                  adminAccess: selectedValue.toString(),
                });
              }
            }}
          />
          <span className="text-red text-xs">{formErrors.department}</span>
        </div>
      </div>
    </div>
  );
};
