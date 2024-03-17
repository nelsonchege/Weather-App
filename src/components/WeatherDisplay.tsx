import { weathercode } from "../../utils/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WeatherDisplayProps = {
  cityName: string;
  details:
    | {
        startTime: string;
        values: {
          cloudCover: number;
          temperature: number;
          weatherCode: number;
          windSpeed: number;
        };
      }
    | undefined;
};

const WeatherDisplay = ({ cityName, details }: WeatherDisplayProps) => {
  let weathervalue = details ? details.values.weatherCode.toString() : "0";
  //@ts-ignore
  const description = weathercode[weathervalue][0];
  //@ts-ignore
  const icon = weathercode[weathervalue][1];
  return (
    <Card className="flex flex-col items-center w-[20%]">
      <CardHeader>
        <CardTitle>{cityName}</CardTitle>
      </CardHeader>
      <CardContent>
        <h1>{details?.values.temperature}°</h1>
      </CardContent>
      <CardFooter className="flex flex-col">
        <img
          src={icon}
          alt={description}
          style={{ width: "105px", height: "auto" }}
        />
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};

export default WeatherDisplay;
