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

		const controller = new AbortController();
		const { signal } = controller;

		const handleDebounce = setTimeout(async () => {
			setIsAutocompleteLoading(true);
			try {
				if (!input) {
					return;
				}
				const response = await fetch("/api/autocomplete?input=" + input, {
					signal,
				});
				if (signal.aborted) return;

				const data = await response.json();

				if (!response.ok || data.error_message) {
					throw new Error(data.error_message);
				}

				setPredictions(data.predictions);
			} catch (e) {
				if (e instanceof Error && e.name !== "AbortError") {
					toast.error(e.message);
				}
			} finally {
				setIsAutocompleteLoading(false);
			}
		}, debounceTimeout);

		return () => {
			clearTimeout(handleDebounce);
			controller.abort();
		};
	}, [input, selectedOption, debounceTimeout]);

	return [predictions, isAutocompleteLoading];
}
