const baseURL = "http://localhost:3030/jsonstore/users";

const getAll = async () => {
	const response = await fetch(baseURL);
	const result = await response.json();
	const users = Object.values(result);

	return users;
};

export default {
	getAll
};
