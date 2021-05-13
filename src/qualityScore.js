import React from "react";

export default function QualityScore({ children = "placeholder", score = 0 }) {
  return (
    <div className="flex justify-around items-center font-semibold text-lg mx-8">
      <div className="w-1/2 font-semibold text-lg">{children}</div>
      <div className="w-1/3 overflow-hidden h-2 text-xs flex rounded bg-pink-300">
        <div
          style={{ width: "30%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
        ></div>
      </div>
      <span className="text-xs font-semibold text-pink-600">{score}%</span>
    </div>
  );
}
