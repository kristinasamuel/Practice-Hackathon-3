import Image from "next/image";

export default function FlashSale() {
  return (
    <div className="flex flex-col items-center justify-center w-full  mt-20 min-h-screen">
      <div className="flex flex-col justify-between  h-[103px]">
        {/* Header Section */}
        <div className="flex items-center w-full h-[40px] gap-[16px]">
          <Image
            src={"/images/Rectangle 17.png"}
            alt="Rectangle"
            width={20}
            height={40}
            className="rounded-[4px]"
          />
          <p className="font-Poppins items-center font-semibold text-[16px] text-[#DB4444]">
            Today's
          </p>
        </div>
        <div className="flex items-center gap-14">
          <h3 className="font-Inter font-semibold text-[36px] text-[#000000] mt-4">
            Flash Sales
          </h3>
          <div className=" items-center gap-4 hidden sm:flex lg:flex">
            {/* Countdown */}
            <div className="flex flex-col items-center">
              <p className="font-Poppins font-normal text-[12px] text-[#000000]">
                Days
              </p>
              <h4 className="font-Inter font-bold text-[32px] text-[#000000]">
                03
              </h4>
            </div>
            <Image
              src={"/images/Semiclone.png"}
              alt="Semicolon"
              height={16}
              width={4}
              className="mt-4 object-contain"
            />
            <div className="flex flex-col items-center">
              <p className="font-Poppins font-normal text-[12px] text-[#000000]">
                Hours
              </p>
              <h4 className="font-Inter font-bold text-[32px] text-[#000000]">
                23
              </h4>
            </div>
            <Image
              src={"/images/Semiclone.png"}
              alt="Semicolon"
              height={16}
              width={4}
              className="mt-4 object-contain"
            />
            <div className="flex flex-col items-center">
              <p className="font-Poppins font-normal text-[12px] text-[#000000]">
                Minutes
              </p>
              <h4 className="font-Inter font-bold text-[32px] text-[#000000]">
                19
              </h4>
            </div>
            <Image
              src={"/images/Semiclone.png"}
              alt="Semicolon"
              height={16}
              width={4}
              className="mt-4 object-contain"
            />
            <div className="flex flex-col items-center">
              <p className="font-Poppins font-normal text-[12px] text-[#000000]">
                Seconds
              </p>
              <h4 className="font-Inter font-bold text-[32px] text-[#000000]">
                56
              </h4>
            </div>
            <div className="flex pl-[470px] gap-[8px]">
              <Image
                src={"/images/Left Arrow.png"}
                alt="left arrow"
                height={46}
                width={46}
              />
              <Image
                src={"/images/Right Arrow.png"}
                alt="Right arrow"
                height={46}
                width={46}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-20 gap-12">
        {/* Card 1 */}
        <div className="w-[270px] h-[350px] flex flex-col items-center">
          <div className="w-[270px] h-[250px] rounded-[4xl] bg-[#F5F5F5]">
            <div className="relative flex justify-between items-start w-full p-2">
              <div className="bg-[#DB4444] flex justify-center w-[55px] h-[26px] rounded-[4px] ml-[12px] top-[12px] items-center">
                <p className="font-Poppins items-center font-normal text-[12px] text-[#FAFAFA]">
                  -40%
                </p>
              </div>
              <div className="w-[34px] h-[76px] top-[12px] left-[224px] gap-[8px]">
                <Image
                  src={"/images/Fill Heart.png"}
                  alt="Fill Heart"
                  width={34}
                  height={34}
                />
                <Image
                  src={"/images/Fill Eye.png"}
                  alt="Fill Eye"
                  width={34}
                  height={34}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/images/Remote.png"}
                alt="Remote"
                width={172}
                height={152}
              />
            </div>
            <div className="flex flex-col mt-8">
              <h1 className="font-Poppins font-medium text-[16px] w-[201px] text-[#000000]">
                HAVIT HV-G92 Gamepad
              </h1>
              <div className="flex flex-row gap-[12px] w-[85px] mt-2">
                <p className="text-[#DB4444] font-Poppins font-medium text-[16px]">
                  $120
                </p>
                <del>
                  <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                    $160
                  </p>
                </del>
              </div>
              <div className="flex flex-row mt-4 space-x-1">
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-semibold text-[14px] px-2 text-[#000000]">
                  (88)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-[270px] h-[350px] flex flex-col items-center gap-[16px]">
          <div className="w-[270px] h-[250px] rounded-[4xl] bg-[#F5F5F5]">
            <div className="relative flex justify-between items-start w-full p-2">
              <div className="bg-[#DB4444] flex justify-center w-[55px] h-[26px] rounded-[4px] ml-[12px] top-[12px] items-center">
                <p className="font-Poppins items-center font-normal text-[12px] text-[#FAFAFA]">
                  -35%
                </p>
              </div>
              <div className="w-[34px] h-[76px] top-[12px] left-[224px] space-y-[8px]">
                <Image
                  src={"/images/Fill Heart.png"}
                  alt="Fill Heart"
                  width={34}
                  height={34}
                />
                <Image
                  src={"/images/Fill Eye.png"}
                  alt="Fill Eye"
                  width={34}
                  height={34}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/images/Keyboard.png"}
                alt="Remote"
                width={190}
                height={180}
              />
            </div>
            <button className="w-[270px] h-[41px] mt-4 rounded-[4px] bg-[#000000] text-[16px] font-medium font-Poppins text-[#FFFFFF]">
              {" "}
              Add To Cart{" "}
            </button>
            <div className="flex flex-col mt-8">
              <h1 className="font-Poppins font-medium text-[16px] w-[195px] text-[#000000]">
                AK-900 Wired Keyboard
              </h1>
              <div className="flex flex-row gap-[12px] w-[85px] mt-2">
                <p className="text-[#DB4444] font-Poppins font-medium text-[16px] ">
                  $960
                </p>
                <del>
                  <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                    $1160
                  </p>
                </del>
              </div>
              <div className="flex flex-row mt-4 space-x-1">
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star1.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-semibold text-[14px] px-2 text-[#000000] ">
                  (75)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="w-[270px] h-[350px] flex flex-col items-center gap-[16px]">
          <div className="w-[270px] h-[250px] rounded-[4xl] bg-[#F5F5F5]">
            <div className="relative flex justify-between items-start w-full p-2">
              <div className="bg-[#DB4444] flex justify-center w-[55px] h-[26px] rounded-[4px] ml-[12px] top-[12px] items-center">
                <p className="font-Poppins items-center font-normal text-[12px] text-[#FAFAFA]">
                  -30%
                </p>
              </div>
              <div className="w-[34px] h-[76px] top-[12px] left-[224px] gap-[8px]">
                <Image
                  src={"/images/Fill Heart.png"}
                  alt="Fill Heart"
                  width={34}
                  height={34}
                />
                <Image
                  src={"/images/Fill Eye.png"}
                  alt="Fill Eye"
                  width={34}
                  height={34}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/images/LED.png"}
                alt="Remote"
                width={170}
                height={129}
                className="flex items-center justify-center "
              />
            </div>
            <div className="flex flex-col ">
              <h1 className="font-Poppins font-medium text-[16px] w-[201px] mt-8 text-[#000000]">
                IPS LCD Gaming Monitor
              </h1>
              <div className="flex flex-row gap-[12px] w-[85px] mt-2">
                <p className="text-[#DB4444] font-Poppins font-medium text-[16px] ">
                  $370
                </p>
                <del>
                  <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                    $400
                  </p>
                </del>
              </div>
              <div className="flex flex-row mt-4 space-x-1">
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-semibold text-[14px] px-2 text-[#000000]">
                  (99)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="w-[270px] h-[350px] flex flex-col items-center gap-[16px]">
          <div className="w-[270px] h-[250px] rounded-[4xl] bg-[#F5F5F5]">
            <div className="relative flex justify-between items-start w-full p-2">
              <div className="bg-[#DB4444] flex justify-center w-[55px] h-[26px] rounded-[4px] ml-[12px] top-[12px] items-center">
                <p className="font-Poppins items-center font-normal text-[12px] text-[#FAFAFA]">
                  -25%
                </p>
              </div>
              <div className="w-[34px] h-[76px] top-[12px] left-[224px] gap-[8px]">
                <Image
                  src={"/images/Fill Heart.png"}
                  alt="Fill Heart"
                  width={34}
                  height={34}
                />
                <Image
                  src={"/images/Fill Eye.png"}
                  alt="Fill Eye"
                  width={34}
                  height={34}
                />
              </div>
            </div>

            <div className="flex justify-center mt-[-30px]">
              <Image
                src={"/images/chair.png"}
                alt="Chair"
                width={100}
                height={100}
                className="object-fill"
              />
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="font-Poppins font-medium text-[16px] w-[201px] text-[#000000]">
                S-Series Comfort Chair
              </h1>
              <div className="flex flex-row gap-[12px] w-[85px] mt-2">
                <p className="text-[#DB4444] font-Poppins font-medium text-[16px] ">
                  $375
                </p>
                <del>
                  <p className="font-Poppins font-medium text-[16px] text-[#000000]">
                    $400
                  </p>
                </del>
              </div>
              <div className="flex flex-row mt-4 space-x-1">
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <Image
                  src={"/images/Star.png"}
                  alt="star"
                  height={20}
                  width={20}
                />
                <p className="font-Poppins font-semibold text-[14px] px-2 text-[#000000]">
                  (99)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat above div for additional product cards */}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-10">
        <button className="w-[234px] h-[56px] rounded-[4px] bg-[#DB4444] text-[16px] font-Poppins font-medium text-[#FAFAFA]">
          View All Products
        </button>
      </div>
    </div>
  );
}
