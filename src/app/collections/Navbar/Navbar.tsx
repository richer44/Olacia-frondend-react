"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ProfileDropdown } from "./ProfileDropdown/ProfileDropdown";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStartedButton = () => {
    // Redirect to the pricing page
    window.open("/pricing", "_blank");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="bg-white sticky top-0 z-[5] shadow-md">
      <nav className="mx-auto flex justify-between h-[85px] py-5 px-7">
        <Link href="/">
          <Image
            src="/images/olaciao-logo.svg"
            alt="Logo"
            width={160}
            height={50}
            className="w-[85%]"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        {/* <IoMenuSharp
          className={`lg:hidden text-zinc-black text-2xl cursor-pointer transition-transform transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          onClick={toggleMenu}
        /> */}

        {/* Navigation Links for Large Screens */}
        <div className=" space-x-5 items-center flex">
          <Image
            src="/icons/blue-message-icon.svg"
            alt="blue-message-icon"
            width={100}
            height={100}
            className="w-[30px] h-[25px] cursor-pointer"
          />
          <Image
            src="/icons/blue-notification-icon.svg"
            alt="blue-message-icon"
            width={100}
            height={100}
            className="w-[25px] h-[25px] cursor-pointer"
          />
          <ProfileDropdown />
        </div>
        {/* Mobile Menu Overlay */}
        {/* {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50">
            <div className="container mx-auto flex justify-end items-start h-[100px] pt-7">
              <RiCloseLine
                className="text-zinc-black text-2xl cursor-pointer transition-transform transform rotate-180"
                onClick={closeMenu}
              />
            </div>

            <div className="flex flex-col items-center mt-10">
              <Link
                href="/"
                className="text-zinc-black text-base font-normal font-Poppins leading-normal mb-4"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-zinc-black text-base font-normal font-Poppins leading-normal mb-4"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-zinc-black text-base font-normal font-Poppins leading-normal mb-4"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/about-us"
                className="text-zinc-black text-base font-normal font-Poppins leading-normal mb-4"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="text-zinc-black text-base font-normal font-Poppins leading-normal mb-4"
                onClick={closeMenu}
              >
                Contact Us
              </Link>

              <Button
                text="Get Started"
                className="text-sm rounded-lg"
                type="primary"
                onClick={closeMenu}
              />
            </div>
          </div>
        )} */}
      </nav>
    </div>
  );
};
