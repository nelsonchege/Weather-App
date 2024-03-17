import { weathercode } from "../../utils/data";
type Props = {
  WeatherData: {
    startTime: string;
    values: {
      cloudCover: number;
      temperature: number;
      weatherCode: number;
      windSpeed: number;
    };
  };
};

const WeatherDetailbyTime = ({ WeatherData }: Props) => {
  const dateObj = new Date(WeatherData.startTime);
  const hours = dateObj.getUTCHours();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;
  // Construct formatted time string
  const formattedTime = `${formattedHours} ${ampm}`;

  let weathervalue = WeatherData
    ? WeatherData.values.weatherCode.toString()
    : "0";
  //@ts-ignore
  const description = weathercode[weathervalue][0];
  //@ts-ignore
  const icon = weathercode[weathervalue][1];
  return (
    <div className="flex flex-col items-center border rounded-md p-2">
      <h1>{formattedTime}</h1>
      <img
        src={icon}
        alt={description}
        style={{ width: "35px", height: "auto" }}
      />
      <p>{WeatherData.values.temperature}°</p>
    </div>
  );
};

export default WeatherDetailbyTime;
