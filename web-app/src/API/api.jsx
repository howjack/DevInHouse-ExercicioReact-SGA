export const get = async (url) => {
	const response = await fetch(url, {
		method: "GET",
	});
	const json = await response.json();
	return json;
};

export const post = async (url, body) => {
	const response = await fetch(url, body);
	const json = await response.json();
	return json;
};
