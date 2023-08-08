import TodaysWeather from "../TodaysWeather";
import WeatherForecast from "../WeatherForecast";
import CurrentWeather from "../CurrentWeather";
import { useStore } from "@/lib/store";
import { useRef } from "react";

const Body = () => {
	return (
		<div className="flex flex-col  justify-start p-5 min-h-[calc(100vh-80px)]">
			<CurrentWeather />
			<TodaysWeather />
			<WeatherForecast />
		</div>
	);
};

export default Body;
