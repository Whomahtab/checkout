import React from "react";

const CloseSvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CheckOutCard = () => {
  return (
    <div className="checkOutCard w-auto border rounded-md shadow-sm flex flex-row items-center p-2 relative ">
      <img
        src="https://zishta.com/cdn/shop/files/kansa-tulsi-kadai-1-zishta-traditional-bronze-kansa-cookware.jpg?v=1731132540&width=1400"
        className="size-12 rounded-md"
      />
      <div className="textContent pt-2 pl-4">
        <h2 className="title  truncate inter font-normal leading-3">
          Tulsi Kadai with Heat Resistant
        </h2>
        <div className="setQTY mt-3 flex items-center justify-between">
          <div className="price text-md inter font-medium text-neutral-600">
            ₹320
          </div>
          <Select className="pt-20">
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="QTY" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="closeIcon absolute top-2 right-4 text-gray-300">
        <CloseSvgIcon />
      </div>
    </div>
  );
};

export default CheckOutCard;
