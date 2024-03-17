import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { startOfDay, endOfDay, format } from "date-fns";

type SearchBarProps = {
  className: string;
  updateWeatherData: (data: []) => void;
  updateCityName: (data: string) => void;
};

const CityNameObject = z.object({
  cityName: z.string().min(2, {
    message: "Enter a valid city name",
  }),
});

const SearchBar = ({
  className,
  updateWeatherData,
  updateCityName,
}: SearchBarProps) => {
  const { control, handleSubmit } = useForm<z.infer<typeof CityNameObject>>({
    resolver: zodResolver(CityNameObject),
    defaultValues: {
      cityName: "",
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof CityNameObject>> = async (
    data
  ) => {
    const featchWeatherData = async () => {
      try {
        const result = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${
            data.cityName
          }&limit=5&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY!}`
        );

        const cityDetails = result.data[0];
        const location = `${cityDetails.lat},${cityDetails.lon}`;

        const dateObj = new Date(Date.now());
        const StartDate = format(
          startOfDay(dateObj),
          "yyyy-MM-dd'T'HH:mm:ss'Z'"
        );
        const EndDate = format(endOfDay(dateObj), "yyyy-MM-dd'T'HH:mm:ss'Z'");

        const result2 = await axios.get(
          `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,windSpeed,cloudCover,weatherCode&timesteps=1h&units=metric&apikey=${import.meta
            .env
            .VITE_TOMMORROWIO_API_KEY!}&startTime=${StartDate}&endTime=${EndDate}`
        );
        updateCityName(data.cityName);
        updateWeatherData(result2.data.data.timelines[0].intervals);
      } catch (error) {
        throw new Error("Failed to fetch weather data");
      }
    };
    toast.promise(featchWeatherData(), {
      loading: "Loading",
      success: "Weather data fetched successfully",
      error: (err) => `${err.toString()}`,
    });
  };
  return (
    <div className={className}>
      <form
        className="flex w-full  items-center space-x-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="cityName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default SearchBar;
