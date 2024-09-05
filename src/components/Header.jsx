"use client";

import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="w-[1440px] h-[142px] py-3">
      <div className="w-[1440px] h-[48px] bg-black text-white flex justify-center items-center">
        <div className="w-[859px] h-[24px] gap-[150px] flex ">
          <div className="w-[7000px] h-[24px] gap-2 flex text-[14px #FAFAFA]">
            <p className="w-[550px] h-[18px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <p className="text-[14px #FAFAFA]">ShopNow</p>
          </div>
          <div className="w-[78px] h-[24px] gap-[5px] flex">
            English <img src="/DropDown.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-200">
        <div className="w-[1440px] h-[38px] gap-[148px] flex items-center justify-start px-[135px] mt-[40px]">
          <div className="w-[675px] h-[24px] gap-[190px] flex">
            <div className="w-[118px] h-[24px] text-[24px] flex items-center">
              Exclusive
            </div>

            <div className="w-[367px] h-[24px] gap-[48px] flex ">
              <Link href="/">
                <div class="underline decoration-solid">Home</div>
              </Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
              <Link href="/signUp">Sign Up</Link>
            </div>

            <div className="w-[347px] h-[38px] flex items-center">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <img src="/Wishlist.svg" alt="" srcset="" />
              <img src="/Cart1 with buy.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white 4px" />
    </div>
  );
};
