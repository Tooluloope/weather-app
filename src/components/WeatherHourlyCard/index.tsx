type WeatherHourlyCardProps = {
	time: string;
	icon: string;
	temp: number;
};

const WeatherHourlyCard = ({ time, icon, temp }: WeatherHourlyCardProps) => {
	const date = new Date(time);
	const timeString = date.toTimeString().split(" ")[0].slice(0, 5);

	return (
		<div className=" w-28 h-40 flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded-md mr-4 shrink-0">
			<p className="text-gray-900 dark:text-gray-100 text-2xl font-semibold">
				{timeString}
			</p>
			<img src={`https://${icon}`} alt={icon} className="w-16 h-16" />
			<p className="text-gray-900 dark:text-gray-100 text-2xl">{temp}°</p>
		</div>
	);
};

export default WeatherHourlyCard;
