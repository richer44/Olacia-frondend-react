"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DropdownProps } from "@/app/types/components/dropdown";
import { FaCaretDown } from "react-icons/fa";

export const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onChange,
  options,
  dropdownWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (selectedValue: string | number) => {
    console.log(selectedValue);

    onChange(selectedValue);
    setIsOpen(false);
  };

  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownContainerRef}>
      <div
        onClick={handleSelectToggle}
        className={`border-stone-300 border text-sm p-3 rounded-lg focus:outline-none focus:border-indigo-blue cursor-pointer relative ${
          dropdownWidth ? dropdownWidth : "w-full"
        }`}
      >
        {options.find((option) => option.value === selectedValue)?.label ||
          options[0].label}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <FaCaretDown size={16} color="#1F3374" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border-stone-300 border rounded-lg shadow-md w-full py-2">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className={`px-4 py-2 text-sm xs:text-base cursor-pointer ${
                selectedValue === option.value
                  ? "bg-indigo-blue text-white"
                  : "hover:bg-grayFA hover:text-black"
              } rounded`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
