import { format, parseISO } from "date-fns";

type WeatherDailyCardProps = {
	date: string;
	icon: string;
	tempLow: number;
	tempHigh: number;
	percentRain: number;
	windSpeed: number;
};

const WeatherDailyCard = ({
	date,
	icon,
	tempLow,
	tempHigh,
	percentRain,
	windSpeed,
}: WeatherDailyCardProps) => {
	const parsedDate = parseISO(date);
	const dayShortForm = format(parsedDate, "EEE");
	const formattedDate = format(parsedDate, "dd/MM");

	return (
		<div className="grid  grid-cols-3 md:grid-cols-6  gap-y-5   bg-gray-100 dark:bg-gray-800 p-2 w-full text-center rounded-md mb-3">
			<div className="flex flex-col justify-between items-center">
				<p className="text-gray-900 dark:text-gray-100 text-xl ">
					{dayShortForm}
				</p>
				<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50 ">
					{formattedDate}
				</p>
			</div>

			<div className="flex flex-col justify-between items-center">
				<img src={`https://${icon}`} alt={icon} className="w-16 h-16 mx-auto" />
			</div>
			<div className="flex flex-col justify-between items-center">
				<p className="text-gray-900 dark:text-gray-100 text-xl ">{tempLow}°</p>
				<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
					Low
				</p>
			</div>
			<div className="flex flex-col justify-between items-center">
				<p className="text-gray-900 dark:text-gray-100 text-xl ">{tempHigh}°</p>
				<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
					High
				</p>
			</div>
			<div className="flex flex-col justify-between items-center">
				<p className="text-gray-900 dark:text-gray-100 text-xl ">
					{percentRain}%
				</p>
				<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
					Rain
				</p>
			</div>
			<div className="flex flex-col justify-between items-center">
				<p className="text-gray-900 dark:text-gray-100 text-xl ">
					{windSpeed}km/h
				</p>
				<p className="text-gray-900 dark:text-gray-100 text-xl opacity-50">
					Wind
				</p>
			</div>
		</div>
	);
};

export default WeatherDailyCard;
