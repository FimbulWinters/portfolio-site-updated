import React from "react";

type Props = {};

export default function HeroBackground({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-circles  rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
    </div>
  );
}
