// URLs

const BASE_URL = "https://keyboard-shop.herokuapp.com";

// products
const ALL_PRODUCTS = "/api/products";

const CATEGORY_PRODUCTS = "/api/products/category/";

// users
const LOGIN = "/api/users/login";

const REGISTER = "/api/users/register";

const FORGOT_PASSWORD = "/api/users/forgotpassword";

const USER_PROFILE = "/api/users/profile";

// all endpoints
const ENDPOINT = {
	BASE_URL,

	ALL_PRODUCTS_URL: BASE_URL + ALL_PRODUCTS,
	CATEGORY_PRODUCTS_URL: BASE_URL + CATEGORY_PRODUCTS,

	LOGIN_URL: BASE_URL + LOGIN,
	REGISTER_URL: BASE_URL + REGISTER,
	FORGOT_PASSWORD_URL: BASE_URL + FORGOT_PASSWORD,

	USER_PROFILE: BASE_URL + USER_PROFILE,
};
export default ENDPOINT;
