import { useStore } from "@/lib/store";
import Navbar from "./Navbar";
import Body from "./Body";

export default function Page() {
	return (
		<div className=" min-h-screen w-screen mt-20 container mx-auto overflow-x-hidden">
			<Navbar />
			<Body />
		</div>
	);
}
