import HydrationZustand from "@/lib/Hydration";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<HydrationZustand>
			<ThemeProvider enableSystem={true} attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</HydrationZustand>
	);
}
