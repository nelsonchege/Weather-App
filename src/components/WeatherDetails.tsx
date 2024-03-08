type WeatherDetailsProps = {
  className: string;
};

const WeatherDetails = ({ className }: WeatherDetailsProps) => {
  return (
    <div className={className}>
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex-grow w-full flex justify-center border border-yellow-300">
          most important data
        </div>
        <div className="w-full border border-yellow-300">
          <p>weather info for different time</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
