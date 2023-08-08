export function formatDate(dateString: string) {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const nth = (n: number) =>
		["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";

	const date = new Date(dateString);
	let hours = date.getHours();
	const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours === 0 ? 12 : hours;
	const minutes = date.getMinutes().toString().padStart(2, "0");

	const dayName = daysOfWeek[date.getDay()];
	const dayOfMonth = date.getDate();
	const year = date.getFullYear();

	return `${hours}:${minutes}${ampm} ${dayName} ${dayOfMonth}${nth(
		dayOfMonth
	)} ${year}`;
}
