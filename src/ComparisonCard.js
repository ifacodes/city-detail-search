import React, { Fragment, useState, useEffect } from "react";
import QualityScore from "./QualityScore.js";

export default function ComparisonCard({ data }) {
  const [city1, setCity1] = useState({
    name: { city: " No", country: "Where" },
    geo_id: 0,
    scores: [],
    exists: false,
  });
  const [city2, setCity2] = useState({
    name: { city: " No", country: "Where" },
    geo_id: 0,
    scores: [],
    exists: false,
  });

  useEffect(() => {
    if (data[1]?._embedded) {
      const split = data[1]._embedded["city:item"].full_name.split(",");
      if (data[1]?._embedded["city:item"]?._embedded) {
        const scores =
          data[1]._embedded["city:item"]._embedded["city:urban_area"]._embedded[
            "ua:scores"
          ].categories;
        setCity1({
          name: { city: split[0], country: split[2] },
          geo_id: data[1]._embedded["city:item"].geoname_id,
          scores: scores,
          exists: true,
        });
      } else {
        setCity1({
          name: { city: split[0], country: split[2] },
          geo_id: data[1]._embedded["city:item"].geoname_id,
          scores: [],
          exists: true,
        });
      }
    } else {
      setCity1({
        name: { city: " No", country: "Where" },
        geo_id: 0,
        scores: [],
        exists: false,
      });
    }
    if (data[2]?._embedded) {
      const split = data[2]._embedded["city:item"].full_name.split(",");
      if (data[2]?._embedded["city:item"]?._embedded) {
        const scores =
          data[2]._embedded["city:item"]._embedded["city:urban_area"]._embedded[
            "ua:scores"
          ].categories;
        setCity2({
          name: { city: split[0], country: split[2] },
          geo_id: data[2]._embedded["city:item"].geoname_id,
          scores: scores,
          exists: true,
        });
      } else {
        setCity2({
          name: { city: split[0], country: split[2] },
          geo_id: data[2]._embedded["city:item"].geoname_id,
          scores: [],
          exists: true,
        });
      }
    } else {
      setCity2({
        name: { city: " No", country: "Where" },
        geo_id: 0,
        scores: [],
        exists: false,
      });
    }
  }, [data]);

  return (
    <div className="rounded-2xl shadow-lg bg-white sm:w-5/6 w-full flex-grow my-10 flex flex-col">
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
      <section className="my-4 sm:mx-0 mx-4 flex-grow flex sm:flex-row flex-col items-stretch sm:divide-x sm:divide-y-0 divide-y divide-x-0 divide-gray-300">
        {city1.exists ? (
          <Fragment>
            {city1.scores.length ? (
              <Fragment>
                <div className="flex flex-col justify-around sm:w-1/2 w-full sm:my-0 my-2 sm:space-y-0 space-y-2">
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
                <div className="flex flex-col justify-around sm:w-1/2 w-full sm:my-0 my-2 sm:pt-0 pt-3 sm:space-y-0 space-y-2">
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
      <section className="my-4 pb-2 sm:mx-0 mx-4 flex-grow flex sm:flex-row flex-col items-stretch sm:divide-x sm:divide-y-0 divide-y divide-x-0 divide-gray-300">
        {city2.exists ? (
          <Fragment>
            {city2.scores.length ? (
              <Fragment>
                <div className="flex flex-col justify-around sm:w-1/2 w-full sm:my-0 my-2 sm:space-y-0 space-y-2">
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
                <div className="flex flex-col justify-around sm:w-1/2 w-full sm:my-0 sm:pt-0 pt-3 my-2 sm:space-y-0 space-y-2">
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
