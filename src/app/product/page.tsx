// Home // product fetch from sanity by using fake api
import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DataFetch = async () => {
  // query to fetch data
  const query = await client.fetch(
    `*[_type == "product"]{
            _id,
          name,
          price,
          discountPercentage,
          tags,
          "imageUrl": image.asset->url
        }`
  );
  console.log(query);
  return (
    // Main heading
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h2 className="text-[38px] font-bold text-center mb-4 text-red-500">
        Discover Our Latest Products. <br />
        Find High-Quality Items
        <br />
      </h2>
      <p className="text-[18px] text-center text-gray-600 mb-8 italic w-full lg:max-w-6xl ">
        Explore a variety of carefully selected products designed to fit your
        unique style. Whether you're looking for comfort, fashion, or
        functionality, we have something for everyone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product detail  */}
        {query.map((product: any) => {
          return (
            <Card
              key={product._id}
              className="bg-white rounded-lg  flex flex-col items-center justify-center"
            >
              {/* fetch image */}
              <div className="w-full flex justify-center mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-40 object-contain rounded-md"
                />
              </div>

              <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-xl font-semibold text-center ">
                  {product.name}
                </h1>
                <p className="text-lg font-medium text-gray-700 ">
                  <span className="text-red-400 font-semibold text-[18px]">
                    {" "}
                    Price:{" "}
                  </span>{" "}
                  ${product.price}
                </p>
                {/* Button detail of product show*/}
                <Link href={`/product/${product._id}`}>
                  <Button
                    variant={"destructive"}
                    className="text-[18px] rounded-lg transition-colors mb-3 lg:mb-0"
                  >
                    View Product
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetch;
