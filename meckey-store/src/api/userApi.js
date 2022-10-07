// contains APIs related to users

// libraries
import axios from "axios";

// api URLs
import ENDPOINT from "./endpoint";

// register
const register = async (email, password) => {
	console.log("Trying to signing up with email: ", email);

	let item = { email: email, password: password };

	let res = await axios({
		method: "post",
		url: ENDPOINT.REGISTER_URL,
		type: "json",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(item),
	});

	if (res.status === 200) {
		let user = await res.data;
		localStorage.setItem("current-user", JSON.stringify(user));
		return user;
	}
};

// forgot password
const forgotPassword = async (email) => {
	console.log("Trying to get new password of email: ", email);

	let item = { email: email };

	let res = await axios({
		method: "post",
		url: ENDPOINT.FORGOT_PASSWORD_URL,
		type: "json",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(item),
	});

	if (res.status === 200) {
		let user = await res.data;
		localStorage.setItem("current-user", JSON.stringify(user));
		return user;
	}
};

// login user
const login = async (email, password) => {
	console.log("Trying to loging with email: ", email);

	let item = { email: email, password: password };

	let res = await axios({
		method: "post",
		url: ENDPOINT.LOGIN_URL,
		type: "json",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(item),
	});

	if (res.status === 200) {
		let user = await res.data;
		localStorage.setItem("current-user", JSON.stringify(user));
		return user;
	}
};

// auto login - refresh
const autoLogin = () => {
	const json = localStorage.getItem("current-user");
	return json ? JSON.parse(json) : null;
};

// logout
const logout = () => {
	//clear localStorage
	localStorage.clear();
};

// export user APIs
const userAPIs = {
	register: register,
	login: login,
	forgotPassword: forgotPassword,
	autoLogin: autoLogin,
	logout: logout,
};

export default userAPIs;
