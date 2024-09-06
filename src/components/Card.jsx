import React from "react";

export const Card = () => {
  return (
    <>
      <div className="w-[270px] h-[350px] gap-[16px]">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
          srcset=""
          className="w-[270px] h-[250px] rounded-[4px]"
        />
        <div className="w-[201px] h-[84px] gap-[8px]">
          <p>HAVIT HV-G92 Gamepad</p>
          <p>$120 $160</p>

          <div className="flex">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p>(88)</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
