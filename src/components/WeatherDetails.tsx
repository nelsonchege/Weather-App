import WeatherDetailbyTime from "./WeatherDetailbyTime";
import WeatherDisplay from "./WeatherDisplay";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type WeatherDetailsProps = {
  className: string;
  weatherData: {
    startTime: string;
    values: {
      cloudCover: number;
      temperature: number;
      weatherCode: number;
      windSpeed: number;
    };
  }[];
  cityName: string;
};

const WeatherDetails = ({
  className,
  weatherData,
  cityName,
}: WeatherDetailsProps) => {
  const currentHour = new Date().getHours();
  let closestEntry;

  for (const entry of weatherData) {
    const date = new Date(entry.startTime);
    const hour = date.getUTCHours();

    if (currentHour === hour) {
      closestEntry = entry;
      break;
    }
  }

  console.log("Closest entry based on hour:", closestEntry);
  return (
    <div className={className}>
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex-grow w-full flex justify-center ">
          <WeatherDisplay cityName={cityName} details={closestEntry} />
        </div>
        <div className="w-full h-36 p-2">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
              {weatherData.map((data) => (
                <WeatherDetailbyTime key={data.startTime} WeatherData={data} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
