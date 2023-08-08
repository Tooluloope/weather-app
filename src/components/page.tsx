import { createContext, useRef } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./Navbar";
import Body from "./Body";
import { useStore } from "@/lib/store";
import EmptyState from "./EmptyState";
import { useFocus } from "./utils/useFocus";

export const InputFocusContext = createContext<{ focus: () => void } | null>(
	null
);

export default function Page() {
	const { focus, ref } = useFocus();

	const [current, location, forecast] = useStore(store => [
		store.weatherData.current,
		store.weatherData.location,
		store.weatherData.forecast,
	]);

	const hasData = current && location && forecast;

	return (
		<InputFocusContext.Provider value={{ focus }}>
			<div className="  w-screen mt-20 container mx-auto overflow-x-hidden">
				<Navbar inputRef={ref} />

				{hasData ? <Body /> : <EmptyState />}
			</div>
			<Toaster />
		</InputFocusContext.Provider>
	);
}
