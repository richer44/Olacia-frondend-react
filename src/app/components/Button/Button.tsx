import { ButtonProps } from "@/app/types/components/button";
import Image from "next/image";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  full,
  className,
  icon,
  type,
}) => {
  const buttonClasses = `font-Poppins font-semibold px-4 py-2.5 ${
    full ? "w-full" : "fit-content"
  }`;

  return (
    <button
      className={`${buttonClasses} ${
        type === "primary"
          ? "bg-indigo-blue text-white"
          : type === "green"
          ? "bg-green text-white"
          : type === "danger"
          ? "bg-light-red text-red"
          : "bg-gray text-indigo-blue"
      } ${
        icon ? "items-center flex " : ""
      } ${className} hover:opacity-90 delay-100 transition-all`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="mr-2">
          <Image
            src={icon}
            alt={icon}
            width={13}
            height={13}
            className="w-5 h-5"
          />
        </span>
      )}
      {text}
    </button>
  );
};

export default Button;
