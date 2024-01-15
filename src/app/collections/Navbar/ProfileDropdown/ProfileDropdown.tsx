import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const ProfileDropdown = () => {
  const userProfileDropdownLinks = [
    { label: "My Profile", link: "/" },
    {
      label: "Account Settings",
      link: "/",
    },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative group" ref={dropdownRef}>
      <Image
        src={"/icons/blue-user-icon.svg"}
        alt="profile-pic"
        width={34}
        height={34}
        className={`rounded-full cursor-pointer`}
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div
          className={`overflow-hidden absolute top-8 right-4 py-4 px-4 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg text-sm`}
        >
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/blue-user-icon.svg"}
              alt="profile-user-icon"
              width={100}
              height={100}
              className="w-[60px] h-[45px]"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-base">Alex</h3>
              <p className="text-sm text-gray-8A cursor-pointer hover:text-cyan-blue"> admin@gmail.com </p>
            </div>
          </div>
          <div className="h-[0.5px] my-3 opacity-[0.20] bg-gray-500"></div>

          <div className="flex flex-col">
            {userProfileDropdownLinks.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.link}
                className="text-black text-[0.875rem] cursor-pointer font-medium px-4 py-[6px] hover:bg-grayFA hover:text-cyan-blue transition-colors rounded"
              >
                {menuItem.label}
              </Link>
            ))}

            <Link
              href="/login"
              className="text-black text-[0.875rem] cursor-pointer font-medium px-4 py-[8px] hover:bg-secondary-gray-100 hover:bg-grayFA hover:text-cyan-blue  place rounded"
            >
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
