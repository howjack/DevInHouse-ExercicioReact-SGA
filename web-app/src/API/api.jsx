export const get = async (url) => {
	const response = await fetch(url, {
		method: "GET",
	});
	const json = await response.json();
	return json;
};

export const post = async (url, body) => {
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
	});
	const json = await response.json();
	return json;
};

export const patch = async (url, body) => {
	const response = await fetch(url, {
		method: "PATCH",
		body: JSON.stringify(body),
	});
	const json = await response.json();
	return json;
};
