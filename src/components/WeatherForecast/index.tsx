import { useStore } from "@/lib/store";
import WeatherDailyCard from "../WeatherDailyCard";

const WeatherForecast = () => {
	const forecast = useStore(store => store.weatherData.forecast.forecastday);
	return (
		<div className=" my-5">
			<p className="w-full mb-5 text-xl md:text-2xl">Next 5 days</p>
			<div className="w-full">
				{forecast.slice(1, 6).map((day, index) => (
					<WeatherDailyCard
						key={index}
						date={day.date}
						icon={day.day.condition.icon}
						tempLow={day.day.mintemp_c}
						tempHigh={day.day.maxtemp_c}
						percentRain={day.day.daily_chance_of_rain}
						windSpeed={day.day.maxwind_kph}
					/>
				))}
			</div>
		</div>
	);
};

export default WeatherForecast;
