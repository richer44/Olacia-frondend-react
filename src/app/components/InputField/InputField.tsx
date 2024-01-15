import { InputFieldProps } from "@/app/types/components/form";
import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri"; // Assuming you have react-icons installed

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={true}
        className="border-stone-300 text-sm border rounded-md p-3 focus:outline-none focus:border-indigo-blue w-full"
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <RiEyeFill size={20} color="#04C3FF" />
          ) : (
            <RiEyeOffFill size={20} color="#04C3FF" />
          )}
        </button>
      )}
    </div>
  );
};
