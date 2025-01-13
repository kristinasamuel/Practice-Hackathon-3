// home // hero section
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center mt-[36px] flex-col sm:flex-row">
      {/* Sidebar show on large screen  */}
      <div className="w-full sm:w-[217px] h-[344px] border-r-2 border-neutral-200 ml-0 sm:ml-0 lg:ml-[135px]  gap-[16px] space-y-4 sm:block hidden px-4">
        <div className="flex gap-[51px] font-Poppins font-normal text-[16px] items-center">
          <p>Woman's Fashion</p>
          <IoIosArrowForward />
        </div>
        <div className="flex items-center gap-[60px]">
          <p>Mens Fashion</p>
          <IoIosArrowForward />
        </div>
        <p className="font-Poppins font-normal text-[16px]">Electronics</p>
        <p className="font-Poppins font-normal text-[16px]">Home & Lifestyle</p>
        <p className="font-Poppins font-normal text-[16px]">Medicine</p>
        <p className="font-Poppins font-normal text-[16px]">Sports & Outdoor</p>
        <p className="font-Poppins font-normal text-[16px]">Groceries & Pets</p>
        <p className="font-Poppins font-normal text-[16px]">Health & Beauty</p>
      </div>

      {/* Divider Line*/}
      <div className="h-auto flex sm:block">
        <Image
          src="/images/Line4.png"
          alt="Line"
          width={1}
          height={800}
          className="border-solid border h-full w-[1px] border-[#000000] object-cover hidden sm:block"
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-[892px] h-auto sm:h-[344px] flex flex-col items-center justify-center rounded-lg bg-[#000000] px-4 sm:px-[64px]">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div className="flex flex-col justify-center text-center sm:text-left sm:mr-[20px] mt-5">
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-2">
              <Image
                src="/images/appleIcon.png"
                alt="Apple Icon"
                height={40}
                width={49}
              />
              <span className="font-Poppins font-normal text-[16px] text-[#FAFAFA]">
                iPhone 14 Series
              </span>
            </div>
            <h1 className="font-Inter font-semibold text-[32px] sm:text-[48px] text-[#FAFAFA] mb-2">
              Up to 10% off Voucher
            </h1>
            <div className="flex items-center gap-4 mb-4 justify-center sm:justify-start lg:justify-start  ">
              <p className="font-Poppins font-medium text-[16px] text-[#FAFAFA] ">
                Shop Now
              </p>
              <IoIosArrowRoundForward className="w-[24px] h-[24px] text-[#FAFAFA] " />
            </div>
            <Image
              src="/images/Line 5.png"
              alt="Line"
              width={81}
              height={1}
              className="object-cover hidden sm:flex lg:flex "
            />
          </div>

          {/* Hero Image */}
          <div className="flex justify-center sm:justify-end mt-4 sm:mt-0">
            <Image
              src="/images/heroImage.png"
              alt="hero image"
              width={320}
              height={320}
              className="w-full sm:w-[496px] sm:h-[352px] object-contain"
            />
          </div>
        </div>

        {/* Dots*/}
        <div className="flex items-center justify-center gap-[16px] mt-4 mb-10">
          <Image
            src="/images/Ellipse 6.png"
            alt="Ellipse"
            height={12}
            width={12}
            className="rounded hover:bg-red-500"
          />
          <Image
            src="/images/Ellipse 6.png"
            alt="Ellipse"
            height={12}
            width={12}
            className="rounded hover:bg-red-500"
          />
          <Image
            src="/images/Ellipse 7.png"
            alt="Ellipse"
            height={12}
            width={12}
            className="rounded bg-red-500"
          />
          <Image
            src="/images/Ellipse 6.png"
            alt="Ellipse"
            height={12}
            width={12}
            className="rounded hover:bg-red-500"
          />
          <Image
            src="/images/Ellipse 6.png"
            alt="Ellipse"
            height={12}
            width={12}
            className="rounded hover:bg-red-500"
          />
        </div>
      </div>
    </div>
  );
}
