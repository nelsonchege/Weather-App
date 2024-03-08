import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { ThemeButton } from "./components/ThemeButton";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [weatherData, setWeatherData] = useState("data");
  return (
    <div className=" w-screen h-screen  flex flex-col">
      <div className="w-full flex justify-end p-5">
        <ThemeButton />
      </div>

      <div className={` w-full h-full  p-5 flex gap-3 flex-col items-center`}>
        <SearchBar className={"sm:w-[45%]"} />
        <WeatherDetails className={weatherData ? "w-full h-full" : "hidden"} />
      </div>
    </div>
  );
}

export default App;
