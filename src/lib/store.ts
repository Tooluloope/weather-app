import { WeatherResponseData } from "@/components/utils/types";
import { shallowEqual } from "fast-equals";
import { createWithEqualityFn } from "zustand/traditional";

interface StoreInterface {
	weatherData: WeatherResponseData;
	isLoading: boolean;
	setWeatherData: (weatherData: WeatherResponseData) => void;
	setIsLoading: (isLoading: boolean) => void;
}

const getDefaultInitialState = () => ({
	weatherData: {} as WeatherResponseData,
	isLoading: false,
});

export type StoreType = ReturnType<typeof useStore>;

export const useStore = createWithEqualityFn<StoreInterface>(
	set => ({
		...getDefaultInitialState(),
		setWeatherData: weatherData => {
			set({
				weatherData,
			});
		},
		setIsLoading: isLoading => {
			set({
				isLoading,
			});
		},
	}),
	shallowEqual
);
