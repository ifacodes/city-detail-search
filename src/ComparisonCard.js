import React, { Fragment, useState, useRef, useEffect } from "react";
import QualityScore from "./QualityScore.js";

export default function ComparisonCard({ data }) {
  const [city1, setCity1] = useState(data[1]);
  const [city2, setCity2] = useState(data[2]);

  const previousStateRef = useRef();
  const previousState = previousStateRef.current;
  if (data[1] !== previousState && data[1] !== city1) {
    setCity1(data[1]);
  }

  const previousStateRef2 = useRef();
  const previousState2 = previousStateRef2.current;
  if (data[2] !== previousState2 && data[2] !== city2) {
    setCity2(data[2]);
  }

  useEffect(() => {
    previousStateRef.current = data[1];
  });

  useEffect(() => {
    previousStateRef2.current = data[2];
  });

  return (
    <div className="rounded-2xl shadow-lg bg-white md:w-5/6 w-full flex-grow my-10 flex flex-col">
      <header className="flex items-center justify-between p-6 border-b border-gray-300">
        <div className="border-0 hover:border-2 hover:border-red-500">
          <h1 className="ml-2 text-3xl text-gray-700 font-semibold">
            {city1.exists ? (
              <Fragment>
                {city1.name.city},{" "}
                <span className="tracking-wide text-gray-800 text-3xl font-bold">
                  {city1.name.country}
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
      <section className="my-4 md:mx-0 mx-4 flex md:flex-row flex-col items-stretch md:divide-x md:divide-y-0 divide-y divide-x-0 divide-gray-300">
        {city1.exists ? (
          <Fragment>
            {city1.scores.length ? (
              <Fragment>
                <div className="flex flex-col justify-around md:w-1/2 w-full md:my-0 my-2 pb-2 md:space-y-4 space-y-2">
                  <QualityScore data={city1.scores[0]}></QualityScore>
                  <QualityScore data={city1.scores[1]}></QualityScore>
                  <QualityScore data={city1.scores[2]}></QualityScore>
                  <QualityScore data={city1.scores[3]}></QualityScore>
                  <QualityScore data={city1.scores[4]}></QualityScore>
                  <QualityScore data={city1.scores[5]}></QualityScore>
                  <QualityScore data={city1.scores[6]}></QualityScore>
                  <QualityScore data={city1.scores[7]}></QualityScore>
                  <QualityScore data={city1.scores[8]}></QualityScore>
                </div>
                <div className="flex flex-col justify-around md:w-1/2 w-full md:my-0 my-2 md:pt-0 pt-6 pb-2 md:space-y-4 space-y-2">
                  <QualityScore data={city1.scores[9]}></QualityScore>
                  <QualityScore data={city1.scores[10]}></QualityScore>
                  <QualityScore data={city1.scores[11]}></QualityScore>
                  <QualityScore data={city1.scores[12]}></QualityScore>
                  <QualityScore data={city1.scores[13]}></QualityScore>
                  <QualityScore data={city1.scores[14]}></QualityScore>
                  <QualityScore data={city1.scores[15]}></QualityScore>
                  <QualityScore data={city1.scores[16]}></QualityScore>
                  <QualityScore
                    className="invisible"
                    data={city1.scores[16]}
                  ></QualityScore>
                </div>
              </Fragment>
            ) : (
              <div className="my-auto mx-auto text-2xl font-semibold text-center py-16">
                Life Quality Scores are currently unavailable for this{" "}
                {city1.name.city}
                !
                <br />
                <br />
                Check out Teleport Cities for more information!
                <br />
                <br />
                <a href={`https://teleport.org/cities/vote/${city1.geo_id}`}>
                  <div className="transition-transform transform-gpu underline font-semibold text-xl hover:scale-125">
                    {city1.name.city} on Teleport Cities
                  </div>
                </a>
              </div>
            )}
          </Fragment>
        ) : (
          <div className="py-16 my-auto mx-auto text-2xl font-semibold text-center">
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
      <header className="flex items-center justify-between p-6 border-b border-t border-gray-300">
        <div className="border-0 hover:border-2 hover:border-red-500">
          <h1 className="ml-2 text-3xl text-gray-700 font-semibold">
            {city2.exists ? (
              <Fragment>
                {city2.name.city},{" "}
                <span className="tracking-wide text-gray-800 text-3xl font-bold">
                  {city2.name.country}
                </span>
              </Fragment>
            ) : (
              "No city could be found! "
            )}
          </h1>
        </div>
      </header>
      <section className="my-4 pb-2 md:mx-0 mx-4 flex-grow flex md:flex-row flex-col items-stretch md:divide-x md:divide-y-0 divide-y divide-x-0 divide-gray-300">
        {city2.exists ? (
          <Fragment>
            {city2.scores.length ? (
              <Fragment>
                <div className="flex flex-col justify-around md:w-1/2 w-full md:my-0 my-2 pb-2 md:space-y-4 space-y-2">
                  <QualityScore data={city2.scores[0]}></QualityScore>
                  <QualityScore data={city2.scores[1]}></QualityScore>
                  <QualityScore data={city2.scores[2]}></QualityScore>
                  <QualityScore data={city2.scores[3]}></QualityScore>
                  <QualityScore data={city2.scores[4]}></QualityScore>
                  <QualityScore data={city2.scores[5]}></QualityScore>
                  <QualityScore data={city2.scores[6]}></QualityScore>
                  <QualityScore data={city2.scores[7]}></QualityScore>
                  <QualityScore data={city2.scores[8]}></QualityScore>
                </div>
                <div className="flex flex-col justify-around md:w-1/2 w-full md:my-0 md:pt-0 pt-6 my-2 pb-2 md:space-y-4 space-y-2">
                  <QualityScore data={city2.scores[9]}></QualityScore>
                  <QualityScore data={city2.scores[10]}></QualityScore>
                  <QualityScore data={city2.scores[11]}></QualityScore>
                  <QualityScore data={city2.scores[12]}></QualityScore>
                  <QualityScore data={city2.scores[13]}></QualityScore>
                  <QualityScore data={city2.scores[14]}></QualityScore>
                  <QualityScore data={city2.scores[15]}></QualityScore>
                  <QualityScore data={city2.scores[16]}></QualityScore>
                  <QualityScore
                    className="invisible"
                    data={city2.scores[16]}
                  ></QualityScore>
                </div>
              </Fragment>
            ) : (
              <div className="py-16 my-auto mx-auto text-2xl font-semibold text-center">
                Life Quality Scores are currently unavailable for{" "}
                {city2.name.city}
                !
                <br />
                <br />
                Check out Teleport Cities for more information!
                <br />
                <br />
                <a href={`https://teleport.org/cities/vote/${city2.geo_id}`}>
                  <div className="transition-transform transform-gpu underline font-semibold text-xl hover:scale-125">
                    {city2.name.city} on Teleport Cities
                  </div>
                </a>
              </div>
            )}
          </Fragment>
        ) : (
          <div className="py-16 my-auto mx-auto text-2xl font-semibold text-center">
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
