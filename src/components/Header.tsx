// Home // Header of the page
"use client";
import { FaSearch, FaRegHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  // side bar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Header for large screen */}
      <div className="flex justify-between items-center w-full bg-[#FAFAFA] h-[88px] px-5 md:px-[20px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h4 className="text-[32px] text-red-500 hover:text-red-200 font-bold font-Inter">Exclusive</h4>
        </div>

        {/* large screen  Menu (hidden on mobile) screen */}
        <div className="hidden md:flex w-[500px] justify-center">
          <ul className="flex font-Poppins font-normal text-[18px] items-center gap-[48px]">
            <Link href={"/"}>
              <li className="hover:underline ">Home</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:underline ">Contact</li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:underline ">About</li>
            </Link>
            <Link href={"/product"}>
              <li className="hover:underline ">Product</li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:underline mb-2"> Cart</li>
            </Link>
            <Link href={"/Checkout"}>
              <li className="hover:underline mb-2">CheckOut</li>
            </Link>
            <Link href={"/"}>
              <li className="hover:underline ">Sign Up</li>
            </Link>
          </ul>
        </div>

        {/*  Search and Icons (hidden on mobile) */}
        <div className="hidden md:flex justify-end gap-[24px]">
          <div className="flex w-[243px] h-[38px] justify-center items-center bg-[#F5F5F5]">
            <p className="font-Poppins font-normal text-[12px] text-[#000000] w-[153px]">
              What are you looking for?
            </p>
            <FaSearch className="h-[24px] w-[24px]" />
          </div>
          <div className="flex items-center gap-[16px]">
            <FaRegHeart className="w-[20px] h-[17.83px]" />
            <FaShoppingCart className="w-[19.89px] h-[15px]" />
          </div>
        </div>

        {/* Mobile Menu Icon (hidden on larger screens) */}
        <div className="md:hidden flex items-center justify-end gap-[16px]">
          <FaBars
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Sidebar design for mobile */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-[250px] h-full bg-[#FAFAFA] p-4 shadow-lg z-50 transition-all duration-300`}
      >
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[34px] text-green-600 font-bold font-Inter mb-4">Quick Links</h4>
          <ul className="font-Poppins font-normal text-[18px] text-gray-700 uppercase">
            <Link href={"/"}>
              <li className="hover:underline underline-offset-4 mb-2">Home</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:underline underline-offset-4 mb-2">Contact</li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:underline underline-offset-4 mb-2">About</li>
            </Link>
            <Link href={"/product"}>
              <li className="hover:underline underline-offset-4 mb-2">Product</li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:underline underline-offset-4 mb-2"> Cart</li>
            </Link>
            <Link href={"/Checkout"}>
              <li className="hover:underline underline-offset-4">CheckOut</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Overlay to close sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
}
