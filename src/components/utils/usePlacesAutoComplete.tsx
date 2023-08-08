import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export function usePlacesAutocomplete(
	input = "",
	selectedOption = "",
	debounceTimeout = 400
): [PlaceAutocompleteResult[], boolean] {
	const [isAutocompleteLoading, setIsAutocompleteLoading] = useState(false);

	const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([]);

	useEffect(() => {
		if (selectedOption === input) return;
		const handleDebounce = setTimeout(async () => {
			setIsAutocompleteLoading(true);
			try {
				if (!input) {
					return;
				}
				const response = await fetch("/api/autocomplete?input=" + input);
				const data = await response.json();

				if (!response.ok || data.error_message) {
					throw new Error(data.error_message);
				}

				setPredictions(data.predictions);
			} catch (e) {
				toast.error(String(e));
			} finally {
				setIsAutocompleteLoading(false);
			}
		}, debounceTimeout);

		return () => {
			clearTimeout(handleDebounce);
		};
	}, [input, selectedOption, debounceTimeout]);

	return [predictions, isAutocompleteLoading];
}
