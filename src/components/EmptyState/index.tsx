import { useContext } from "react";
import { InputFocusContext } from "../page";

const EmptyState = () => {
	const inputFocus = useContext(InputFocusContext);

	const handleFindWeather = () => {
		inputFocus?.focus();
	};

	return (
		<div className=" h-[calc(100vh-80px)] flex justify-center items-center flex-col text-center px-5">
			<img src="weather.svg" alt="empty state" className="w-80 h-80" />
			<h2 className=" text-3xl">Looking for Weather Updates?</h2>
			<p className=" max-w-sm my-5">
				Enter a location to get started, and we'll show you the current weather
				and upcoming forecasts!
			</p>
			<button
				type="button"
				onClick={handleFindWeather}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				Find Weather
			</button>
		</div>
	);
};

export default EmptyState;
