import React, { useEffect, useState } from "react";
import QualityScore from "./QualityScore.js";

export default function CityCard({ data }) {
  const [state, setState] = useState({
    name: { city: " No", country: "Where" },
    scores: [
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
      { name: "placeholder", color: "ffffff", score_out_of_10: 0 },
    ],
  });

  useEffect(() => {
    if (data._embedded) {
      const split = data._embedded["city:item"].full_name.split(",");
      setState({
        name: { city: split[0], country: split[2] },
        scores:
          data._embedded["city:item"]._embedded["city:urban_area"]._embedded[
            "ua:scores"
          ].categories,
      });
    }
  }, [data]);

  return (
    <div className="rounded-2xl shadow-lg bg-white w-5/6 flex-grow my-10 flex flex-col">
      <header className="flex items-center justify-between p-6 border-b border-solid border-gray-300 rounded-t">
        <h1 className="ml-2 text-3xl text-gray-700 font-semibold">
          {state.name.city},{" "}
          <span className="tracking-wide text-gray-800 text-3xl font-bold">
            {state.name.country}
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
          <QualityScore data={state.scores[0]}></QualityScore>
          <QualityScore data={state.scores[1]}></QualityScore>
          <QualityScore data={state.scores[2]}></QualityScore>
          <QualityScore data={state.scores[3]}></QualityScore>
          <QualityScore data={state.scores[4]}></QualityScore>
          <QualityScore data={state.scores[5]}></QualityScore>
          <QualityScore data={state.scores[6]}></QualityScore>
          <QualityScore data={state.scores[7]}></QualityScore>
          <QualityScore data={state.scores[8]}></QualityScore>
        </div>
        <div style={{ width: "1px" }} className=" bg-gray-300" />
        <div className="flex flex-col justify-around w-1/2">
          <QualityScore data={state.scores[9]}></QualityScore>
          <QualityScore data={state.scores[10]}></QualityScore>
          <QualityScore data={state.scores[11]}></QualityScore>
          <QualityScore data={state.scores[12]}></QualityScore>
          <QualityScore data={state.scores[13]}></QualityScore>
          <QualityScore data={state.scores[14]}></QualityScore>
          <QualityScore data={state.scores[15]}></QualityScore>
          <QualityScore data={state.scores[16]}></QualityScore>
        </div>
      </section>
    </div>
  );
}
