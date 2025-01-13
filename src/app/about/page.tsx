// Home // about page
"use client";
import Services from "@/components/Services";
import Image from "next/image";
export default function page() {
  return (
    <div className="w-full mt-20 min-h-screen overflow-hidden px-4">
      <div className="flex flex-row justify-start gap-[12px] mx-auto max-w-6xl">
        <p className="font-Poppins font-normal text-[14px] text-[#000000]">
          Home
        </p>
        <Image
          src={"/images/Line 13.png"}
          alt="Line"
          height={1}
          width={10}
          className="border-[#00000080]"
        />
        <p className="font-Poppins text-[14px] font-normal text-[#000000]">
          About
        </p>
      </div>
      {/* Our story in detail */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto mt-16 md:mt-0">
        <div className="flex flex-col w-full items-center md:items-start text-center md:text-left">
          <h4 className="font-Inter text-[54px] font-semibold text-[#000000]">
            Our Story
          </h4>

          <p className="font-Poppins w-full md:w-[525px] h-[130px] font-normal text-[16px] text-[#000000] mt-5">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands serving 3 million
            customers across the region.
          </p>

          <p className="font-Poppins w-full md:w-[505px] font-normal text-[16px] mt-4 text-[#000000]">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer goods.
          </p>
        </div>
        {/* Our Acheievmnet */}
        <div className="flex items-center w-full md:w-[705px] justify-center mt-10 md:mt-0">
          <Image
            src={"/images/Image.png"}
            alt="Story Profile"
            height={609}
            width={705}
            className="w-full h-auto md:max-w-[705px] md:h-[609px]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl mt-20 gap-[30px]">
        <div className="flex items-center justify-center w-[270px] h-[230px] hover:bg-[#DB4444] rounded-[4px] border border-solid border-[#0000004D] gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/images/icon_shop.png"}
              alt=""
              height={40}
              width={40}
              className="bg-[#000000] rounded-full"
            />
            <h3 className="text-[32px] font-bold font-Inter">10.5k</h3>
            <p className="font-Poppins font-normal text-[16px]">
              Sellers active on our site
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-[270px] h-[230px] bg-[#DB4444] border border-solid rounded-[4px] border-[#0000004D] gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/images/icon_shop.png"}
              alt=""
              height={40}
              width={40}
              className="bg-[#000000] rounded-full"
            />
            <h3 className="text-[32px] font-bold font-Inter">33k</h3>
            <p className="font-Poppins font-normal text-[16px]">
              Monthly Product Sales
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-[270px] h-[230px] border hover:bg-[#DB4444] border-solid rounded-[4px] border-[#0000004D]">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/images/icon_shop.png"}
              alt=""
              height={40}
              width={40}
              className="bg-[#000000] rounded-full"
            />
            <h3 className="text-[32px] font-bold font-Inter">45.5k</h3>
            <p className="font-Poppins font-normal text-[16px]">
              Customers active on our site
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-[270px] h-[230px] border hover:bg-[#DB4444] rounded-[4px] border-solid border-[#0000004D]">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/images/icon_shop.png"}
              alt=""
              height={40}
              width={40}
              className="bg-[#000000] rounded-full"
            />
            <h3 className="text-[32px] font-bold font-Inter">25k</h3>
            <p className="font-Poppins font-normal text-[16px]">
              Annual gross sales on our site
            </p>
          </div>
        </div>
      </div>
      {/* profile and detail */}
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl mt-20 gap-[30px]">
        <div className="w-full md:w-[370px] h-full md:h-[564px] flex flex-col justify-center items-center">
          <div className="bg-[#F5F5F5] w-[370px] h-[430px] flex justify-center">
            <Image
              src={"/images/profile1.png"}
              alt="Tom"
              height={391}
              width={236}
              className="object-cover mt-4"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h3 className="font-Inter font-medium text-[32px] text-[#000000] text-center">
              Tom Cruise
            </h3>
            <p className="font-Poppins font-normal text-[16px] text-[#000000] text-center">
              Founder & Chairman
            </p>
            <div className="flex flex-row mt-2 space-x-3 justify-center">
              <Image
                src={"/images/icon-Twitter.png"}
                alt="twitter icon"
                height={24}
                width={24}
              />
              <Image
                src={"/images/icon-Instagram.png"}
                alt="Instagram icon"
                height={24}
                width={24}
              />
              <Image
                src={"/images/icon-Linkedin.png"}
                alt="Linkedin icon"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
        {/* profile and detail */}
        <div className="w-full md:w-[370px] h-full md:h-[564px] flex flex-col justify-center items-center">
          <div className="flex justify-center bg-[#F5F5F5] w-[370px] h-[430px]">
            <Image
              src={"/images/profile2.png"}
              alt="Emma"
              height={397}
              width={297}
              className="object-cover mt-4"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h3 className="font-Inter font-medium text-[32px] text-[#000000] text-center">
              Emma Watson
            </h3>
            <p className="font-Poppins font-normal text-[16px] text-[#000000] text-center">
              Managing Director
            </p>
            <div className="flex flex-row mt-2 space-x-3 justify-center">
              <Image
                src={"/images/icon-Twitter.png"}
                alt="twitter icon"
                height={24}
                width={24}
              />
              <Image
                src={"/images/icon-Instagram.png"}
                alt="Instagram icon"
                height={24}
                width={24}
              />
              <Image
                src={"/images/icon-Linkedin.png"}
                alt="Linkedin icon"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
        {/* profile and detail */}
        <div className="w-full md:w-[370px] h-full md:h-[564px] flex flex-col justify-center items-center">
          <div className="flex justify-center bg-[#F5F5F5] w-[370px] h-[430px]">
            <Image
              src={"/images/profile3.png"}
              alt="Will"
              height={392}
              width={326}
              className="object-cover mt-4"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h3 className="font-Inter font-medium text-[32px] text-[#000000] text-center">
              Will Smith
            </h3>
            <p className="font-Poppins font-normal text-[16px] text-[#000000] text-center">
              Product Designer
            </p>
            <div className="flex flex-row mt-2 space-x-3 justify-center">
              <Image
                src={"/images/icon-Twitter.png"}
                alt="twitter icon"
                height={24}
                width={24}
              />
              <Image
                src={"/images/icon-Instagram.png"}
                alt="Instagram icon"
                height={24}
                width={24}
              />
              <Image
                src={"/images/icon-Linkedin.png"}
                alt="Linkedin icon"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
      {/* dosts */}
      <div className="flex flex-row justify-end items-end mx-auto max-w-6xl mt-10 gap-[12px]">
        <Image
          src={"/images/Ellipse 7 (1).png"}
          alt="Dot"
          height={14}
          width={14}
          className="hover:bg-red-400"
        />
        <Image
          src={"/images/Ellipse 7 (1).png"}
          alt="Dot"
          height={14}
          width={14}
          className="hover:bg-red-400"
        />
        <Image
          src={"/images/Ellipse 7 (1).png"}
          alt="Dot"
          height={14}
          width={14}
          className="rounded bg-red-600"
        />
        <Image
          src={"/images/Ellipse 7 (1).png"}
          alt="Dot"
          height={14}
          width={14}
          className="hover:bg-red-400"
        />
        <Image
          src={"/images/Ellipse 7 (1).png"}
          alt="Dot"
          height={14}
          width={14}
          className="hover:bg-red-400"
        />
      </div>
      {/* services */}
      <div>
        <Services />
      </div>
    </div>
  );
}
