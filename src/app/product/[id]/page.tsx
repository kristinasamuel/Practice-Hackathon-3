"use client";
import { client } from "@/sanity/lib/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState<any | null>(null);
  const [isAdded, setIsAdded] = useState(false); // State to track if item is added to the cart
  // const router = useRouter();
  useEffect(() => {
    if (id) {
      const query = `*[_type == "product" && _id == $id] {
        _id,
        name,
        price,
        description,
        tags,
        "imageUrl": image.asset->url
      }`;

      // Fetch the product by its ID
      client
        .fetch(query, { id })
        .then((data) => {
          setProduct(data[0]);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || "[]");

    // Check if the product already exists in the cart
    const existingProductIndex = currentCart.findIndex((item: any) => item._id === product._id);

    if (existingProductIndex !== -1) {
      // If product exists, increase quantity by 1
      currentCart[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it with quantity 1
      product.quantity = 1;
      currentCart.push(product);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    // Show success message
    setIsAdded(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  if (!product) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8 space-y-8 md:space-y-0">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={product.imageUrl || "/path/to/default-image.jpg"}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain rounded-md"
        />
      </div>

      {/* Content on the right */}
      <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start space-y-4 text-center md:text-left">
        <h1 className="text-[32px] font-semibold">{product.name}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>
        <p className="text-xl text-red-500 font-bold text-center">Price: ${product.price}</p>
        
        {/* Add to Cart Button */}
        <Button 
          variant={"destructive"} 
          className="text-[18px]" 
          onClick={addToCart}
        >
          Add to Cart
        </Button>

        {/* Success Message */}
        {isAdded && (
          <div className="mt-4 text-[#0000000] font-semibold text-[24px]">
            Product successfully added to the cart!
          </div>
        )}
                    
        <div className="text-center mt-4">
          <p className="text-center text-lg font-semibold text-red-500">Thank you for choosing us!</p>
        </div>
        <div className="flex items-end justify-end">
          <Link href="/product">
            <Button className="text-[18px]">Go Back for Shopping</Button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;