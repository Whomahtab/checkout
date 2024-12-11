import React from "react";
import { Button } from "../../components/ui/button";
import "../../src/App.css";
const buttonStyle = {
  background: `radial-gradient(
        ellipse farthest-corner at right bottom,
        #fedb37 0%,
        #fdb931 8%,
        #9f7928 30%,
        #8a6e2f 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse farthest-corner at left top,
        #ffffff 0%,
        #ffffac 8%,
        #d1b464 25%,
        #5d4a1f 62.5%,
        #5d4a1f 100%
      )`,
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const CheckOutTotal = () => {
  return (
    <div className="bg-neutral-100 px-4 py-5 rounded-sm">
      <div className="textTotal flex justify-between">
        <h3 className="font-semibold text-2xl inter text-gray-700">Total</h3>
        <span className="totalPrice inter font-medium text-gray-700">
          Rs. 12,950 INR
        </span>
      </div>
      <p className="text-neutral-400 mt-4 inter">
        (Incl. of all taxes) Shipping calculated at checkout.
      </p>
      <button className="bg-gray-800 w-full mt-4  h-12 rounded-md text-white text-lg">
        Checkout
      </button>
    </div>
  );
};

export default CheckOutTotal;
