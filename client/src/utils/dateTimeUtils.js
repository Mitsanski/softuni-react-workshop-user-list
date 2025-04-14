export const fromIsoDate = (isoDate) => {
	const date = new Date(isoDate);
	const dateOptions = { year: "numeric", month: "long", day: "numeric" };
	const formattedDate = date.toLocaleString("en-US", dateOptions);
	return formattedDate;
};
