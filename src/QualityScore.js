import React from "react";

export default function QualityScore({ data }) {
  return (
    <div className="flex justify-around items-center font-semibold text-lg mx-8">
      <div className="w-1/2 font-semibold text-lg">{data.name}</div>
      <div className="w-1/3 overflow-hidden h-2 text-xs flex rounded bg-gray-300">
        <div
          style={{
            width: (data.score_out_of_10 / 10) * 100 + "%",
            backgroundColor: data.color,
          }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "
        ></div>
      </div>
      <span className="text-xs font-semibold text-gray-800">
        {data.score_out_of_10.toLocaleString("en-US", {
          maximumFractionDigits: 1,
          minimumFractionDigits: 0,
        })}
        /10
      </span>
    </div>
  );
}
