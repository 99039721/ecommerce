// "use client";

// import React, { useState, useEffect } from "react";

// aexport const WithUseEffects = () => {
//   const [counter, setCounter] = useState(10);

//   useEffect(() => {
//     if (counter > 0) {
//       const timer = setTimeout(() => setCounter(counter - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [counter]);

//   return <div>{counter}</div>;
// };

import React from "react";

export const WithUseEffects = () => {
  return <div>WithUseEffects</div>;
};
