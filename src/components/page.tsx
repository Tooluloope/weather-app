import { createContext, useRef } from "react";

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
		</InputFocusContext.Provider>
	);
}
