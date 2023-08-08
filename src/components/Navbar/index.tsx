import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Select from "../Select";

const Navbar: React.FC<{ inputRef: React.Ref<{ focus: () => void }> }> = ({
	inputRef,
}) => {
	const { systemTheme, theme, setTheme } = useTheme();

	const renderThemeChanger = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<SunIcon
					className="w-10 h-10 text-yellow-500  "
					role="button"
					onClick={() => setTheme("light")}
				/>
			);
		} else {
			return (
				<MoonIcon
					className="w-10 h-10 text-blue-500 "
					role="button"
					onClick={() => setTheme("dark")}
				/>
			);
		}
	};
	return (
		<nav
			data-testid="navbar"
			className=" fixed top-0 left-0 w-screen  py-3  shadow z-50 bg-white dark:bg-slate-900"
		>
			<div className=" flex justify-between items-center container mx-auto px-5">
				<Select ref={inputRef} />

				<button className=" hover:bg-gray-100 dark:hover:bg-gray-800 text-white px-2 py-2 rounded-full ml-2 shrink-0">
					{renderThemeChanger()}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
