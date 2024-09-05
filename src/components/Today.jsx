"use client";

import React from "react";

export const Today = () => {
  return (
    <div className="w-[1440px] h-[493px] bg-slate-200">
      <div className="w-[1440px] h-[493px] bg-slate-200 px-[135px] flex mt-[40px] mb-[140px] gap-3">
        <div className="w-[217px] h-[344px] bg-slate-200 gap-4 flex flex-col">
          <p>Woman’s Fashion</p>
          <p>Men’s Fashion</p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
        <div class="w-[0.5px] h-[344px] bg-black opacity-[30] mr-[25px]"> </div>

        <img
          src="/Frame 560.svg"
          alt=""
          srcset=""
          className="w-[892px] h-[344px]"
        />
      </div>
    </div>
  );
};
