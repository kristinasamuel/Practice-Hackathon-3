// // Home Product check out page
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 

const CheckoutPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    //  localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    // Calculate the total price 
    const total = storedCart.reduce(
      (acc: number, item: any) => acc + item.price,
      0
    );
    setTotalPrice(total);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 space-y-3">
      <h2 className="text-[49px] text-red-500 font-bold  text-center">CHECKOUT</h2>
      <p className="text-[23px] text-gray-700 text-center italic">Review your order details and confirm your purchase.</p>


      {/* Cart Items */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md mb-8 p-6">
        <h3 className="text-[28px] text-red-400 font-semibold mb-4">Order Summary</h3>
        {cart.length === 0 ? (
          <p className="text-teal-400 text-[18px]">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span>{item.name}</span>
                </div>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t font-semibold text-lg mt-4">
              <span >Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Confirm Order Button */}
      <div className="mt-8 w-full max-w-lg">
        <Button
        variant={"destructive"}
          className="w-full text-white text-[20px] rounded-lg shadow-md transition-colors"
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;