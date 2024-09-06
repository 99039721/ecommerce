"use client";

import React from "react";
import { Card } from "./Card";

export const Today = () => {
  let counter = 0;
  return (
    <div className="w-[1440px] h-[493px] gap-10 bg-green-300">
      <div className="w-[1440px] h-[103px] gap-10 ">
        <Card />
      </div>
      ;<div className="w-[1440px] h-[350px] gap-30 "></div>;
    </div>
  );
};
