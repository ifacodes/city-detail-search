import "./App.css";
import { useState, useEffect } from "react";
import CityCard from "./cityCard.js";

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState({});

  const fetchApi = (e) => {
    e.preventDefault();
    if (search.length > 1) {
      fetch(
        "https://api.teleport.org/api/cities/?search=" +
          search +
          "&embed=city:search-results/city:item/city:urban_area/ua:scores"
      )
        .then((response) => response.json())
        .then((data) => setCity(data._embedded["city:search-results"][0]));
      setSearch("");
    } else {
      setCity({});
    }
  };

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <div className="h-screen bg-purple-400 flex flex-col">
      <header className="flex items-center bg-white h-16">
        <form onSubmit={fetchApi}>
          <input
            type="search"
            value={search}
            placeholder="Search for a City"
            className="ml-4 py-2 px-4 rounded-md border border-purple-500 outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <section className="flex-grow w-full flex flex-col justify-center items-center">
        <CityCard></CityCard>
      </section>
    </div>
  );
}

export default App;
