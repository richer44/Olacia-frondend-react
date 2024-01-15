import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full mt-5">
      <div className="flex gap-3">
        <p className="text-gray-500 text-sm p-2">{currentYear} ©</p>
        <p className="text-gray-500 text-sm p-2">iQansoft</p>
      </div>
      <div className="flex gap-3">
        <Link
          href={"/"}
          className="text-gray-500 text-sm p-2 hover:text-dull-blue hover:underline"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="text-gray-500 text-sm p-2  hover:text-dull-blue hover:underline"
        >
          Support
        </Link>
        <Link
          href={"/"}
          className="text-gray-500 text-sm p-2  hover:text-dull-blue hover:underline"
        >
          Purchase
        </Link>
      </div>
    </div>
  );
};
