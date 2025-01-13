// Home // header top
import { IoIosArrowDown } from "react-icons/io"
export default function HeaderTop() {
    return (
      <div className="md:flex items-center justify-center w-full hidden  h-[48px] bg-[#000000] overflow-hidden ">
        {/* Shop Now  */}
      <div className=" flex items-center gap-[2px] w-full md:w-[550px]">
         <p className="text-center text-[#FAFAFA] font-Poppins w-[322px] md:w-[474px] font-normal text-[14px] "> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
       <p className="font-Poppins font-semibold text-[14px] items-center underline text-[#FAFAFA] ">ShopNow</p>
      </div>
      <div className="flex relative left-0 md:left-[231px]  gap-4 ">
        {/* Drop Down languages */}
      <p className="text-[#FAFAFA] font-Poppins font-normal text-[14px] mt-1 ">English</p>
      <IoIosArrowDown className=" w-[30px] h-[30px] text-[#FAFAFA] " />

      </div>
      </div>

    )
  }