import { useStore } from "@/lib/store";
import { formatDate } from "../utils";

const CurrentWeather = () => {
	const [current, location, forecast] = useStore(store => [
		store.weatherData.current,
		store.weatherData.location,
		store.weatherData.forecast,
	]);

	if (!current || !location || !forecast) {
		return null;
	}
	const formattedDate = formatDate(location.localtime);

	return (
		<>
			<div className="w-full">
				<p className="text-5xl md:text-7xl lg:text-8xl mb-3">
					{location.name}, {location.country}
				</p>
				<p className="  text-xl md:text-2xl"> {formattedDate}</p>
			</div>

			<div className="w-full flex flex-wrap justify-between my-5 mb-10 items-center">
				<div className=" w-full shrink-0 md:w-1/2 flex justify-between items-center text-center ">
					<img
						src={`https://${current.condition.icon}`}
						alt={"176"}
						className=" w-40 h-40 mx-auto "
					/>
					<div className=" w-1/2 shrink-0">
						<p className=" text-5xl md:text-7xl  mb-2">{current.temp_c}°C</p>
						<p className=" text-xl md:text-2xl">{current.condition.text}</p>
					</div>
				</div>
				<div className="  w-full shrink-0 md:w-1/2 grid  grid-cols-3  gap-y-5  text-center border-y md:border-y-0 md:border-l py-7">
					<div>
						<p className="text-gray-900 dark:text-gray-100 text-xl ">
							{forecast.forecastday[0].astro.sunrise}
						</p>
						<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50 ">
							Sunrise
						</p>
					</div>

					<div>
						<p className="text-gray-900 dark:text-gray-100 text-xl ">
							{forecast.forecastday[0].astro.sunset}
						</p>
						<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50 ">
							Sunset
						</p>
					</div>

					<div>
						<p className="text-gray-900 dark:text-gray-100 text-xl ">
							{forecast.forecastday[0].day.mintemp_c}°C
						</p>
						<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
							Low
						</p>
					</div>
					<div>
						<p className="text-gray-900 dark:text-gray-100 text-xl ">
							{forecast.forecastday[0].day.maxtemp_c}°C
						</p>
						<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
							High
						</p>
					</div>
					<div>
						<p className="text-gray-900 dark:text-gray-100 text-xl ">
							{forecast.forecastday[0].day.daily_chance_of_rain}%
						</p>
						<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
							Rain
						</p>
					</div>
					<div>
						<p className="text-gray-900 dark:text-gray-100 text-xl ">
							{forecast.forecastday[0].day.maxwind_mph}mph
						</p>
						<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
							Wind
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CurrentWeather;
