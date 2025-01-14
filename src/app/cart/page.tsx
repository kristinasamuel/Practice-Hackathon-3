// home // add to cart 
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  // local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Handle removing a product from the cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const checkout = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 space-y-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty. Add some items to the cart!</p>
      ) : (
        <div className="w-full max-w-5xl">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border-b mb-4 bg-white rounded-lg shadow-sm">
              {/* Product Image */}
              <div className="w-20 h-20 mr-4">
                <Image
                  src={item.imageUrl }
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>

              {/* Remove button */}
              <Button
                variant="ghost"
                className="px-4 py-2  text-gray-400 rounded-lg"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout button */}
      <div className="mt-8">
        <Button
          onClick={checkout}
          variant={"destructive"}
          className=" text-white text-[18px] py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;