"use client";

import Head from "next/head";
import Page from "../components/page";

export default function Home() {
	return (
		<>
			<Head>
				<title>Weatheria</title>
				<meta
					name="description"
					content="Gets you precise weather information"
				/>
			</Head>
			<Page />
		</>
	);
}
