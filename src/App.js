import "./App.css";
import CityCard from "./cityCard.js";

function App() {
  return (
    <div className="h-screen bg-purple-400 flex flex-col">
      <header className="flex items-center bg-white h-16">
        <input
          type="search"
          placeholder="Search for a City"
          className="ml-4 py-2 px-4 rounded-md border border-purple-500 outline-none"
        />
      </header>
      <section className="flex-grow w-full flex flex-col justify-center items-center">
        <CityCard></CityCard>
      </section>
    </div>
  );
}

export default App;
