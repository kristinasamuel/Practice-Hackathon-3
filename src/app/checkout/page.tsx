// Home // checkout page
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const router = useRouter();

  useEffect(() => {
    // Get the cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    // Calculate the total price
    const total = storedCart.reduce(
      (acc: number, item: any) => acc + item.price,
      0
    );
    setTotalPrice(total);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const placeOrder = () => {
    console.log("Order placed", { cart, formData });
    localStorage.removeItem("cart");
    router.push("/order-success");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 space-y-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Checkout</h2>
      {/* Cart Items */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md mb-8 p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.buy</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <div className="flex items-center">
                  <img
                    src={item.imageUrl || "/path/to/default-image.jpg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span>{item.name}</span>
                </div>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t font-semibold text-lg mt-4">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Shipping Information Form */}
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Shipping Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Order Submit Button */}
      <div className="mt-8 w-full max-w-lg">
        <Button
          onClick={placeOrder}
          className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
