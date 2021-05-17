import "./App.css";
import { useState, Fragment } from "react";
import CityCard from "./CityCard.js";
import ComparisonCard from "./ComparisonCard.js";
import WelcomeCard from "./WelcomeCard";

function App() {
  const [search, setSearch] = useState({ 1: "", 2: "" });
  const [city, setCity] = useState({ 1: {}, 2: {} });
  const [compare, setCompare] = useState(false);
  const [first, setFirst] = useState(true);

  const parseData = (data) => {
    if (data?._embedded) {
      const split = data._embedded["city:item"].full_name.split(",");
      if (data?._embedded["city:item"]?._embedded) {
        const scores =
          data._embedded["city:item"]._embedded["city:urban_area"]._embedded[
            "ua:scores"
          ].categories;
        return {
          name: { city: split[0], country: split[2] },
          geo_id: data._embedded["city:item"].geoname_id,
          scores: scores,
          exists: true,
        };
      } else {
        return {
          name: { city: split[0], country: split[2] },
          geo_id: data._embedded["city:item"].geoname_id,
          scores: [],
          exists: true,
        };
      }
    } else {
      return {
        name: { city: "No", country: "Where" },
        geo_id: 0,
        scores: [],
        exists: false,
      };
    }
  };

  const fetchApi = (e, which) => {
    e.preventDefault();
    if (search[which].length > 1) {
      fetch(
        "https://api.teleport.org/api/cities/?search=" +
          search[which] +
          "&embed=city:search-results/city:item/city:urban_area/ua:scores"
      )
        .then((response) => response.json())
        .then((data) => {
          setCity({
            ...city,
            [which]: parseData(data._embedded["city:search-results"][0]),
          });
          setFirst(false);
        });
    } else {
      setCity({ ...city, [which]: {} });
    }
  };

  return (
    <div className="min-h-screen h-full w-screen bg-purple-400 flex flex-col">
      <header className="py-3 gap-y-3 flex items-center flex-wrap bg-white h-auto">
        <form onSubmit={(e) => fetchApi(e, 1)}>
          <input
            autoFocus
            type="search"
            value={search["1"]}
            placeholder="Search for a City"
            className="mx-4 py-2 px-4 rounded-md border border-purple-500 outline-none focus:border-purple-500 focus:ring-purple-500"
            onChange={(e) => setSearch({ ...search, 1: e.target.value })}
          />
        </form>
        <button
          className={`${
            compare
              ? "bg-purple-500 focus:ring-purple-500 hover:bg-purple-400"
              : "hover:bg-purple-100 focus:ring-purple-500"
          } ml-1 p-2.5 rounded-md border border-purple-500 focus:outline-none focus:ring-1`}
          onClick={() => {
            setCompare((value) => !value);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${compare ? "text-white" : "text-purple-800"} h-5 w-5 `}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
          </svg>
        </button>
        {compare && (
          <form onSubmit={(e) => fetchApi(e, 2)}>
            <input
              type="search"
              value={search[2]}
              placeholder="Compare With..."
              className="mx-4 py-2 px-4 rounded-md border border-purple-500 outline-none focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => setSearch({ ...search, 2: e.target.value })}
            />
          </form>
        )}
      </header>
      <section className="flex-grow w-full flex flex-col justify-center items-center">
        {first ? (
          <Fragment>
            <WelcomeCard />
          </Fragment>
        ) : (
          <Fragment>
            {compare ? (
              <Fragment>
                <ComparisonCard data={city} />
              </Fragment>
            ) : (
              <CityCard data={city[1]}></CityCard>
            )}
          </Fragment>
        )}
      </section>
    </div>
  );
}

export default App;
