import React from "react";
import HeroSection from "../HeroSection";
import Pricing from "../Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive } from "../Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjFive} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
