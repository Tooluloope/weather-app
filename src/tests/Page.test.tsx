import Page from "@/components/page";
import { weatherResponse } from "./__mocks__/weatherResponse";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { autocompleteResponse } from "./__mocks__/autocompleteResponse";
import exp from "constants";
import Navbar from "@/components/Navbar";

window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};

it("Toggle changes from light to dark mode", () => {
	const { getByRole, getByTestId } = render(<Navbar inputRef={() => {}} />);
	const themeToggler = getByRole("button");
	const dashboardBackground = getByTestId("navbar");

	expect(themeToggler).toBeInTheDocument();
	expect(dashboardBackground).toHaveStyle(
		"background-color: rgb(255 255 255 / var(--tw-bg-opacity));"
	);
	fireEvent.click(themeToggler);
	expect(dashboardBackground).toHaveStyle(
		"background-color: rgb(15 23 42 / var(--tw-bg-opacity));"
	);
});
it("Input receives focus when the user clicks on the button", () => {
	const { getByText, getByPlaceholderText } = render(<Page />);

	fireEvent.click(getByText("Enter a Location"));

	expect(
		getByPlaceholderText("Search for Places, cities, countries ...")
	).toHaveFocus();
});

it("handles a successful fetch", async () => {
	(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
		ok: true,
		json: async () => autocompleteResponse,
	} as Response);

	const { getByPlaceholderText, getByText } = render(<Page />);

	fireEvent.change(
		getByPlaceholderText("Search for Places, cities, countries ..."),
		{ target: { value: "niger" } }
	);

	await waitFor(() => {
		expect(getByText("Niger")).toBeInTheDocument();
		expect(getByText("Nigeria")).toBeInTheDocument();
		expect(getByText("Niger River")).toBeInTheDocument();
	});

	(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
		ok: true,
		json: async () => weatherResponse,
	} as Response);

	fireEvent.click(getByText("Niger"));

	await waitFor(() => {
		expect(getByText("Niamey, Niger")).toBeInTheDocument();
		expect(getByText("3:18AM Tuesday 8th 2023")).toBeInTheDocument();
		expect(getByText("Partly cloudy")).toBeInTheDocument();
	});
});

it("handles a fetch with an error response", async () => {
	const errorMessage = "Some error message";
	(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
		ok: false,
		json: async () => ({ error_message: errorMessage }),
	} as Response);

	const { getByPlaceholderText, getByText } = render(<Page />);

	fireEvent.change(
		getByPlaceholderText("Search for Places, cities, countries ..."),
		{ target: { value: "niger" } }
	);

	await waitFor(() => {
		expect(getByText(errorMessage)).toBeInTheDocument();
	});
});
