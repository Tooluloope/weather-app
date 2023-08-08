import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Select from "../Select";

const Navbar: React.FC<{ inputRef: React.Ref<{ focus: () => void }> }> = ({
	inputRef,
}) => {
	const { systemTheme, theme, setTheme } = useTheme();

	const renderThemeChanger = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;
		const isDark = currentTheme === "dark";

		return (
			<>
				<SunIcon
					className={`${
						isDark
							? "translate-x-[-50%] left-[50%]"
							: "translate-x-[100%] left-[100%]"
					} w-10 h-10 text-yellow-500  absolute transition duration-150 ease-in-out top-[50%] translate-y-[-50%]`}
					role="button"
					onClick={() => setTheme("light")}
				/>

				<MoonIcon
					className={`${
						!isDark
							? "translate-x-[-50%] left-[50%]"
							: "translate-x-[-100%] left-0"
					} w-10 h-10 text-blue-500  absolute transition duration-150 ease-in-out  top-[50%] translate-y-[-50%] `}
					role="button"
					onClick={() => setTheme("dark")}
				/>
			</>
		);
	};

	return (
		<nav
			data-testid="navbar"
			className=" fixed top-0 left-0 w-screen  py-3  shadow z-50 "
		>
			<div className=" flex justify-between items-center container mx-auto px-5">
				<Select ref={inputRef} />

				<button className=" hover:bg-gray-100 dark:hover:bg-gray-800 text-white px-2 py-2 rounded-full ml-2 shrink-0 relative w-[56px] h-[56px] overflow-hidden">
					{renderThemeChanger()}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
