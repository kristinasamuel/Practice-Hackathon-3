// Home  // services
import Image from "next/image";
export default function Services() {
  return (
    // Detail of the services  (our company provided)
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-6xl mt-10 gap-[12px]">
      <div className="flex flex-col justify-center items-center w-full md:w-[249px] h-full  md:h-[161px] ">
        {/* fast and secure delivery */}
        <div className="flex flex-col  items-center justify-center">
          <Image
            src={"/images/Services.png"}
            alt="Service"
            height={80}
            width={80}
          />

          <p className="font-Poppins font-semibold w-[247px]  text-[18px] text-[#000000] mt-4">
            FREE AND FAST DELIVERY
          </p>
          <p className="font-Poppins font-normal text-[14px]  mt-2">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      {/* for customer help */}
      <div className="flex flex-col justify-center items-center w-full md:w-[249px] h-full md:h-[161px] ">
        <div className="flex flex-col  items-center justify-center">
          <Image
            src={"/images/Services (1).png"}
            alt="Service"
            height={80}
            width={80}
          />

          <p className="font-Poppins font-semibold w-[247px]  text-[18px] text-[#000000] mt-4">
            24/7 CUSTOMER SERVICE
          </p>
          <p className="font-Poppins font-normal text-[14px]  mt-2">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>
      {/* Gurranty detail */}
      <div className="flex flex-col justify-center items-center w-full md:w-[249px] md:h-[161px]  h-ful">
        <div className="flex flex-col  items-center justify-center">
          <Image
            src={"/images/Services (2).png"}
            alt="Service"
            height={80}
            width={80}
          />

          <p className="font-Poppins font-semibold w-[247px]  text-[18px] text-[#000000] mt-4">
            MONEY BACK GUARANTEE
          </p>
          <p className="font-Poppins font-normal text-[14px]  mt-2">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
