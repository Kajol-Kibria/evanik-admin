"use client";
import { useState } from "react";

import { IoCloseCircleOutline } from "react-icons/io5";
export default function ReconciliationTopBanner() {
  const [top, setTop] = useState(true);
  return (
    <div>
      <div
        className={` ${
          top ? "fixed" : "hidden"
        } top-0 left-0  right-0  bg-[#3A3B4C] text-white p-3 z-50`}
      >
        <div className="flex items-center justify-between">
          <div className="sm:flex items-center justify-center gap-3 w-[100%] ">
            <p className="text-sm text-gray-200">
              Hey Mayank, Get <span className=" text-white">Flat 60%</span>{" "}
              Cashback On Your First Recharge | Use Code:{" "}
              <span className=" text-white">FLAT500</span> | Limited Time Offer.
            </p>
            <button className=" bg-white text-xs text-gray-900 font-semibold py-2 px-2 hover:scale-105 active:scale-95 transition-all duration-200 rounded-md my-2 sm:my-0">
              Recharge Now
            </button>
          </div>
          <div onClick={() => setTop(!top)} className="px-3 cursor-pointer">
            <IoCloseCircleOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
