import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Today } from "@/components/Today";
import { WithUseEffects } from "@/components/WithUseEffects";
import React from "react";

// export default async function Home() {
//   // const result = await fetch("https://dev.to/api/articles");
//   // const objResult = await result.json();
//   // // console.log(objResult);

//   return (
//     <div className="flex items-center flex-col gap-[100px]">
//       <Hero />
//       <Today />
//       <WithUseEffects />
//       {/* <AllPost posts={objResult} /> */}
//     </div>
//   );
// }

const Home = () => {
  return (
    <div>
      <Hero />
      <Today />
    </div>
  );
};

export default Home;
