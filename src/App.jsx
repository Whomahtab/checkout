import React from "react";
import CheckOutCard from "./Components/CheckOutCard";
import CheckOutTotal from "./Components/CheckOutTotal";

const App = () => {
  return (
    <div className="checkOutWrapper  lg:w-3/4	 mx-auto  ">
      <div className="inner ">
        <h2 className="border-b font-medium text-2xl inter mb-8 py-2 px-4">
          Checkout
        </h2>
        <div className="cardWrapper flex flex-col gap-5 mx-4 lg:flex-row justify-between">
          <div className="hidden lg:block textLeft">
            <h2 className=" text-[12rem] uppercase text-neutral-200">Divyam</h2>
            <img
              src="https://res.cloudinary.com/dhdiayxo7/image/upload/v1733923171/fgjonxocqdquzfccslfl.png"
              className="opacity-[0.1] relative right-[3.8rem] w-[700px]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <CheckOutCard />
            <CheckOutCard />
            <CheckOutCard />
            <CheckOutCard />
            <CheckOutCard />
            <CheckOutCard />
            <CheckOutTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
