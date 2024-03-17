import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { ThemeButton } from "./components/ThemeButton";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState<string | null>(null);
  const updateWeatherData = (data: []) => {
    setWeatherData(data);
  };
  const updateCityName = (data: string) => {
    setCityName(data);
  };
  console.log("weatherData", weatherData);
  return (
    <div className=" w-screen h-screen  flex flex-col">
      <div className="w-full flex justify-end p-5">
        <ThemeButton />
      </div>

      <div className={` w-full h-full  p-5 flex gap-5 flex-col items-center`}>
        <SearchBar
          className={"sm:w-[45%]"}
          updateWeatherData={updateWeatherData}
          updateCityName={updateCityName}
        />
        <WeatherDetails
          className={cityName ? "w-full h-full" : "hidden"}
          weatherData={weatherData}
          cityName={cityName!}
        />
      </div>
    </div>
  );
}

export default App;
