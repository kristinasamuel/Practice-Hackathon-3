// Home // Contact page
import Image from "next/image";
export default function ContactPage() {
  return (
    <div className="w-full  mt-20 min-h-screen ml-0 sm:ml-[34px] md:ml-[135px]  lg:ml-[134px] overflow-hidden ">
      <div className="flex flex-row justify-center sm:justify-center md:justify-start lg:justify-start  gap-[12px] ">
        <p className="font-Poppins font-normal text-[14px] text-[#000000] ">
          Home
        </p>
        <Image
          src={"/images/Line 13.png"}
          alt="Line "
          height={1}
          width={10}
          className=" border-[#00000080]"
        />
        <p className="font-Poppins text-[14px] font-normal text-[#000000]">
          Cantact
        </p>
      </div>
      {/* Conatct information */}
      <div className="flex flex-col  items-center sm:items-center md:items-start lg:items-start md:flex-row l:flex-row mt-20">
        <div className="flex flex-col items-center justify-center w-[340px] h-[457px] rounded-[4px]  bg-[#FFFFFF] shadow-lg ">
          <div className="w-[270px] Top-[40px] gap-[32px] left-[35px]">
            <div className="flex flex-row items-center gap-[16px]">
              <Image
                src={"/images/icons-phone.png"}
                alt="Phone Icon"
                height={40}
                width={40}
              />
              <p className="font-Poppins font-medium text-[16px] text-[#000000] items-center ">
                Call To Us
              </p>
            </div>
            <div>
              <p className="w-[262px] font-Poppins font-normal text-[14px] text-[#000000] mt-5">
                {" "}
                We are available 24/7, 7 days a week.{" "}
              </p>
              <p className="font-Poppins font-normal text-[14px] text-[[#000000] mt-2">
                Phone: +8801611112222
              </p>
            </div>

            <div>
              <Image
                src={"/images/Line 1.png"}
                alt="line"
                width={270}
                height={1}
                className="border border-[#000000] mt-10"
              />
            </div>
            <div className="mt-12 flex flex-row items-center gap-[16px]">
              <Image
                src={"/images/icons-mail.png"}
                alt="Mail Icon"
                height={40}
                width={40}
              />
              <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                Write To US
              </p>
            </div>
            <div className="flx flex-col space-y-4 mt-6">
              <p className="font-Poppins font-normal text-[14px] text-[#000000] w-[250px]">
                     Fill out our form and we will contact you within 24 hours.</p>
              <p className="font-Poppins font-normal text-[14px] text-[#000000]">
                Emails: customer@exclusive.com
              </p>
              <p className="font-Poppins font-normal text-[14px] text-[#000000]">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>
{/* contact me form */}
        <div className="flex flex-col justify-center items-center w-full md:w-[800px] md:h-[457px] mt-10 md:mt-0 p-6 h-auto rounded-[4px] ml-[16px] bg-[#FFFFFF] shadow-lg">
          <div className="w-full sm:w-full  md:w-[737px] lg:w-[737px]  h-auto md:h-[377px] lg:h-[377px] gap-[32px] left-[31px]">
            <div className="flex flex-col md:flex-row items-center gap-[16px]">
              <div className="flex items-center w-full md:w-[235px] h-[50px] bg-[#F5F5F5] rounded-[4px]">
                <p className="font-Poppins font-normal text-[16px] ml-[16px] ">
                  Your Name
                  <span className="font-normal text-[16px] text-red-500 ml-1">
                    *
                  </span>
                </p>
              </div>
              <div className="flex items-center w-full  md:w-[235px] h-[50px] bg-[#F5F5F5] rounded-[4px]">
                <p className="font-Poppins font-normal text-[16px] ml-[16px] ">
                  Your Email
                  <span className="font-normal text-[16px] text-red-500 ml-1">
                    *
                  </span>
                </p>
              </div>
              <div className="flex items-center w-full  md:w-[235px] h-[50px] bg-[#F5F5F5] rounded-[4px]">
                <p className="font-Poppins font-normal text-[16px] ml-[16px] ">
                  Your Phone
                  <span className="font-normal text-[16px] text-red-500 ml-1">
                    *
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-start w-full md:w-[737px] h-[50px] md:h-[207px] bg-[#F5F5F5] rounded-[4px] mt-8">
              <p className="p-[16px] items-start font-Poppins font-normal text-[16px] text-[#000000]">
                Your Massage
              </p>
            </div>

            <div className="flex justify-center md:justify-end mt-8">
              <button className="w-[215px] h-[56px] rounded-[4px] p-[16px] bg-[#DB4444] text-[16px] font-Poppins font-medium text-[#FAFAFA]">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
