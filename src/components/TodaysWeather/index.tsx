import { useStore } from "@/lib/store";
import WeatherHourlyCard from "../WeatherHourlyCard";

const TodaysWeather = () => {
	const hour = useStore(
		store => store.weatherData.forecast.forecastday[0].hour
	);
	return (
		<div className=" overflow-x-scroll hide-scroll-bar my-5">
			<p className="w-full mb-5 text-xl md:text-2xl">Today's weather</p>

			<div className="flex justify-start flex-nowrap  overflow-x-scroll w-full">
				{hour.map((hour, index) => (
					<WeatherHourlyCard
						key={index}
						time={hour.time}
						icon={hour.condition.icon}
						temp={hour.temp_c}
					/>
				))}
			</div>
		</div>
	);
};

export default TodaysWeather;
