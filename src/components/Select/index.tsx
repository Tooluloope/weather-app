import React, { useState, useRef, useEffect } from "react";
import { usePlacesAutocomplete } from "../utils/usePlacesAutoComplete";
import { WeatherResponseData } from "../utils/types";
import { useStore } from "@/lib/store";
import toast from "react-hot-toast";

const Select = React.forwardRef((_, ref: React.Ref<{ focus: () => void }>) => {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [predictions, isAutocompleteLoading] = usePlacesAutocomplete(
		search,
		selectedOption
	);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [setIsLoading, setWeatherData] = useStore(store => [
		store.setIsLoading,
		store.setWeatherData,
	]);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			wrapperRef.current &&
			!wrapperRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	React.useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		},
	}));

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		setIsOpen(true);
	};

	const handleOptionClick = async (place: string) => {
		setIsLoading(true);
		try {
			const weatherResponse = await fetch(
				`/api/weatherForecast?q=${place}&days=7`
			);
			const weatherData = (await weatherResponse.json()) as WeatherResponseData;

			if (!weatherResponse.ok || weatherData.error_message) {
				throw new Error(weatherData.error_message); // or handle more specifically based on status code
			}

			setWeatherData(weatherData);
			setSelectedOption(place);
			setIsOpen(false);
		} catch (e) {
			toast.error(String(e));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div
			className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
			ref={wrapperRef}
		>
			<input
				ref={inputRef}
				type="text"
				placeholder="Search for cities"
				value={search}
				onChange={handleSearch}
				className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full outline-none "
				onClick={() => setIsOpen(true)}
				aria-haspopup="listbox"
			/>
			{isOpen && (
				<div className="absolute top-0 left-0 mt-12 w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-gray-900 px-4 py-2 rounded-lg h-[216px]">
					<ul className="  w-full outline-none " role="listbox">
						{isAutocompleteLoading && (
							<li className="px-4 py-2 rounded-lg w-full outline-none  cursor-pointer truncate">
								Loading...
							</li>
						)}
						{predictions.map((result, index) => (
							<li
								key={index}
								className="hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg w-full outline-none  cursor-pointer truncate"
								onClick={() => handleOptionClick(result.description)}
								role="option"
							>
								{result.description}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
});

export default Select;
