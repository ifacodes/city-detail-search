import React, { Fragment, useRef, useEffect, useState } from "react";
import QualityScore from "./QualityScore.js";

export default function CityCard({ data }) {
  const [state, setState] = useState(data);

  const previousStateRef = useRef();
  const previousState = previousStateRef.current;
  if (data !== previousState && data !== state) {
    setState(data);
  }

  useEffect(() => {
    previousStateRef.current = data;
  });

  return (
    <div className="rounded-2xl shadow-lg bg-white md:w-5/6 w-full  my-10 flex flex-col">
      <header className="flex items-center justify-between p-6 border-b border-solid border-gray-300 rounded-t">
        <div className="border-0 hover:border-2 hover:border-red-500">
          <h1 className="ml-2 text-3xl text-gray-700 font-semibold">
            {state.exists ? (
              <Fragment>
                {state.name.city},{" "}
                <span className="tracking-wide text-gray-800 text-3xl font-bold">
                  {state.name.country}
                </span>
              </Fragment>
            ) : (
              "No city could be found! "
            )}
          </h1>
        </div>
        <a
          href="https://teleport.org/cities"
          className="float-right text-xs text-center font-semibold"
        >
          Powered by Teleport
          <br />A Topia Company
        </a>
      </header>
      <section className="my-4 md:mx-0 mx-4 flex-grow flex md:flex-row flex-col items-stretch md:divide-x md:divide-y-0 divide-y divide-x-0 divide-gray-300">
        {/* City Details go here */}
        {state.exists ? (
          <Fragment>
            {state.scores.length ? (
              <Fragment>
                <div className="flex flex-col justify-around md:w-1/2 w-full md:my-0 my-2 pb-2 md:space-y-4 space-y-2">
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
                <div className="flex flex-col justify-around md:w-1/2 w-full md:my-0 my-2 md:pt-0 pt-6 md:space-y-0 space-y-2">
                  <QualityScore data={state.scores[9]}></QualityScore>
                  <QualityScore data={state.scores[10]}></QualityScore>
                  <QualityScore data={state.scores[11]}></QualityScore>
                  <QualityScore data={state.scores[12]}></QualityScore>
                  <QualityScore data={state.scores[13]}></QualityScore>
                  <QualityScore data={state.scores[14]}></QualityScore>
                  <QualityScore data={state.scores[15]}></QualityScore>
                  <QualityScore data={state.scores[16]}></QualityScore>
                  <QualityScore
                    className="invisible"
                    data={state.scores[16]}
                  ></QualityScore>
                </div>
              </Fragment>
            ) : (
              <div className="my-auto mx-auto text-2xl font-semibold text-center py-16">
                Life Quality Scores are currently unavailable for{" "}
                {state.name.city}!
                <br />
                <br />
                Check out Teleport Cities for more information!
                <br />
                <br />
                <a href={`https://teleport.org/cities/vote/${state.geo_id}`}>
                  <div className="transition-transform transform-gpu font-semibold text-xl underline hover:scale-125">
                    {state.name.city} on Teleport Cities
                  </div>
                </a>
              </div>
            )}
          </Fragment>
        ) : (
          <div className="pb-14 my-auto mx-auto text-2xl font-semibold text-center">
            Life Quality Scores are currently unavailable for this query!
            <br />
            <br />
            <a href={`https://teleport.org/cities/`}>
              <div className="transition-transform transform-gpu underline font-semibold text-xl hover:scale-125">
                Check out Teleport Cities for more information!
              </div>
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
