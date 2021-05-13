import React from "react";
import QualityScore from "./qualityScore.js";

export default function CityCard() {
  return (
    <div className="rounded-2xl shadow-lg bg-white w-5/6 flex-grow my-10 flex flex-col">
      <header className="flex items-center justify-between p-6 border-b border-solid border-gray-300 rounded-t">
        <h1 className="ml-2 text-3xl text-gray-700 font-semibold">
          Katowice,{" "}
          <span className="tracking-wide text-gray-800 text-3xl font-bold">
            Poland
          </span>
        </h1>
        <a
          href="https://teleport.org/cities"
          className="float-right text-xs text-center font-semibold"
        >
          Powered by Teleport
          <br />A Topia Company
        </a>
      </header>
      <section className="my-4 h-full flex flex-row items-stretch">
        {/* City Details go here */}
        <div className="flex flex-col justify-around w-1/2">
          <QualityScore>
            <a href="">Housing</a>
          </QualityScore>
          <QualityScore>Cost of Living</QualityScore>
          <QualityScore>Startups</QualityScore>
          <QualityScore>Venture Capital</QualityScore>
          <QualityScore>Travel Connectivity</QualityScore>
          <QualityScore>Commute</QualityScore>
          <QualityScore>Business Freedom</QualityScore>
          <QualityScore>Safety</QualityScore>
          <QualityScore>Healthcare</QualityScore>
        </div>
        <div style={{ width: "1px" }} className=" bg-gray-300" />
        <div className="flex flex-col justify-around w-1/2">
          <QualityScore>Education</QualityScore>
          <QualityScore>Enviromental Quality</QualityScore>
          <QualityScore>Economy</QualityScore>
          <QualityScore>Taxation</QualityScore>
          <QualityScore>Internet Access</QualityScore>
          <QualityScore>Leisure and Culture</QualityScore>
          <QualityScore>Tolerance</QualityScore>
          <QualityScore>Outdoors</QualityScore>
        </div>
      </section>
    </div>
  );
}
