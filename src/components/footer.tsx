// Home // footer
import Image from "next/image";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
export default function Footer() {
  return (
    <>
      <footer className="w-full  lg:min-h-[440px] bg-[#000000] flex flex-col  items-center justify-center mt-10 min-h-screen">
        <div className="flex flex-col lg:flex-row  text-[23px]  gap-10 mt-20 ">
          <div className="space-y-2 text-center lg:text-left">
            {/* logo  */}
            <h2 className="font-Inter font-bold text-[24px] text-[#FAFAFA] ">
              Exclusive
            </h2>
            <p className="font-Poppins font-medium text-[20px] text-[#FAFAFA] ">
              Subscribe
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA]">
              Get 10% off your first order
            </p>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full h-[48px] font-Poppins bg-[#000000] border border-[#FAFAFA] text-[#FAFAFA] font-normal text-[16px] rounded-[5px] text-center pr-[40px]"
              />
              <IoMdSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FAFAFA]" />
            </div>
          </div>
          {/* support and contact detail */}
          <div className="space-y-2 text-center lg:text-left">
            <p className="font-Poppins font-medium text-[20px] text-[#FAFAFA] ">
              Support
            </p>
            <p className="font-Poppins font-normal text-[16px] w-full lg:w-[175px] text-[#FAFAFA] ">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA] ">
              exclusive@gmail.com
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA] ">
              +88015-88888-9999
            </p>
          </div>
          {/* Account detail */}
          <div className="space-y-2 text-center lg:text-left">
            <p className="font-Poppins font-medium text-[20px] text-[#FAFAFA] ">
              Account
            </p>
            <ul className="font-Poppins font-normal text-[16px] text-[#FAFAFA] space-y-2">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="space-y-2 text-center lg:text-left">
            <p className="font-Poppins font-medium text-[20px] text-[#FAFAFA] ">
              Quick Link
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA] ">
              Privacy Policy
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA] ">
              Terms Of Use
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA] ">
              FAQ
            </p>
            <p className="font-Poppins font-normal text-[16px] text-[#FAFAFA] ">
              Contact
            </p>
          </div>
          {/* Get In Touch*/}
          <div className="space-y-2 text-center lg:text-left">
            <p className="font-Poppins font-medium text-[20px] text-[#FAFAFA] ">
              Download App
            </p>
            <p className="font-Poppins font-normal text-[12px] text-[#FAFAFA] ">
              Save $3 with App New User Only
            </p>
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start">
              <Image
                src={"/images/Qrcode 1.png"}
                alt="QRCode"
                width={76}
                height={76}
                className=""
              />
            </div>
            <div className="flex flex-row gap-3 text-[#FAFAFA] items-center justify-center lg:justify-start ">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex items-center justify-center mb-3 mt-16 space-x-2">
          <FaCopyright className="text-[#FFFFFF]" />
          <p className="font-Poppins font-normal text-[16px] text-[#FFFFFF] text-center">
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
}
