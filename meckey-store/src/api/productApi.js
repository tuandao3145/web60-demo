// contains APIs related to products

// libraries
import axios from "axios";

// api URLs
import ENDPOINT from "./endpoint";

// fetch all products
const fetchAllProducts = async (filter) => {
	let product_url =
		ENDPOINT.ALL_PRODUCTS_URL +
		`?countInStock=${filter.inStock}&priceFrom=${filter.priceFrom}&priceTo=${filter.priceTo}&fieldSort=${filter.fieldSort}&typeSort=${filter.typeSort}&pageNumber=${filter.pageNumber}`;

	console.log("fetching products from: ", product_url);

	const res = await axios({
		method: "get",
		url: product_url,
		type: "json",
	});

	if (res.status === 200) {
		return res.data;
	}
};

// fetch all products of a category
const fetchCategory = async (id, filter) => {
	let category_url =
		ENDPOINT.CATEGORY_PRODUCTS_URL +
		id +
		`?countInStock=${filter.inStock}&priceFrom=${filter.priceFrom}&priceTo=${filter.priceTo}&fieldSort=${filter.fieldSort}&typeSort=${filter.typeSort}&pageNumber=${filter.pageNumber}`;

	console.log("fetching category products from: ", category_url);

	const res = await axios({
		method: "get",
		url: category_url,
		type: "json",
	});

	if (res.status === 200) {
		return res.data;
	}
};

// search product
const searchProducts = async (content) => {
	let search_url = ENDPOINT.CATEGORY_PRODUCTS_URL + content;

	console.log("search dí products from: ", search_url);

	const res = await axios({
		method: "get",
		url: search_url,
		type: "json",
	});

	if (res.status === 200) {
		return res.data;
	}
};

// fetch detail of 01 product by ID
const fetchProductDetail = async (id) => {
	let product_detail_url = ENDPOINT.ALL_PRODUCTS_URL + "/" + id;

	console.log("fetching detail of 01 product from: ", product_detail_url);

	const res = await axios({
		method: "get",
		url: product_detail_url,
		type: "json",
	});

	if (res.status === 200) {
		return res.data;
	}
};

// export product APIs
const productApi = {
	allProducts: fetchAllProducts,
	categoryProducts: fetchCategory,
	searchProducts: searchProducts,
	productDetail: fetchProductDetail,
};

export default productApi;
