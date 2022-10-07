// libraries
import React, { createContext, useState, useEffect, useContext } from "react";
import productApi from "../api/productApi";

// define context
const ProductsContext = createContext();

// main component
const ProductsProvider = ({ children }) => {
	// loading ?
	const [isLoading, setIsLoading] = useState(true);

	// handle product list
	const [productList, setProductList] = useState();

	// handle category list
	const [categoryList, setCategoryList] = useState();

	// handle total products pages
	const [totalProductPages, setTotalProductPages] = useState();

	// handle search
	const [searchResult, setSearchResult] = useState();

	// handle filter
	const [filter, setFilter] = useState({
		inStock: "",
		priceFrom: "",
		priceTo: "",
		fieldSort: "name",
		typeSort: "asc",
		pageNumber: "",
	});

	// handle cart
	const [cart, setCart] = useState({
		items: [],
		total: 0,
		price: 0,
	});

	// fetch all products and category
	const fetchAllProducts = async (filter) => {
		setIsLoading(true);
		let data = await productApi.allProducts(filter);

		setProductList(data.allProduct);
		setCategoryList(data.allCategory);
		setTotalProductPages(data.totalPage);

		console.log("products: ", data.allProduct);
		console.log("categories: ", data.allCategory);
		console.log("filter: ", filter);
		setIsLoading(false);
	};

	// fetch products of a category
	const fetchCategoryProducts = async (id) => {
		setIsLoading(true);
		let categoryProducts = await productApi.categoryProducts(id, filter);

		console.log("category products: ", categoryProducts);
		if (categoryProducts) {
			setIsLoading(false);
			return categoryProducts;
		}
	};

	// fetch detail of a product
	const fetchProductDetail = async (id) => {
		setIsLoading(true);
		let productDetail = await productApi.productDetail(id);

		console.log("product detail: ", productDetail);
		if (productDetail) {
			setIsLoading(false);
			return productDetail;
		}
	};

	// add to cart
	const addToCart = (product) => {
		console.log("adding: ", product);

		// create new cart
		let newCart = {
			items: cart.items,
			total: 0,
			price: 0,
		};

		// get item's id list
		let itemIdList = newCart.items.map((item) => item.info.id);

		// check exist
		let exist = itemIdList.includes(product.id);

		if (!exist) {
			newCart.items.push({
				info: product,
				qty: 1,
			});
		} else {
			for (let item of newCart.items) {
				if (item.info.id === product.id) {
					item.qty += 1;
				}
			}
		}

		for (let item of newCart.items) {
			newCart.total += item.qty;
			newCart.price += item.info.price * item.qty;
		}

		// set new cart state
		setCart(newCart);
		console.log("final cart ", newCart);
	};

	// remove an item in cart
	const removeFromCart = (product) => {
		// create new cart
		let newCart = {
			items: cart.items,
			total: 0,
			price: 0,
		};

		for (let item of newCart.items) {
			if (item.info.id === product.id) {
				item.qty -= 1;
			}
			if (item.qty === 0) {
				newCart.items.filter((item) => item.info.id !== product.id);
			}
		}

		for (let item of newCart.items) {
			newCart.total += item.qty;
			newCart.price += item.info.price * item.qty;
		}

		setCart(newCart);
		console.log("cart: ", cart);
	};

	// values of context
	const value = {
		isLoading,
		filter,
		productList,
		categoryList,
		totalProductPages,
		cart,
		setFilter,
		fetchAllProducts,
		fetchCategoryProducts,
		fetchProductDetail,
		addToCart,
		removeFromCart,
	};

	// return provider
	return (
		// replace step call provider in child components
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

const useProductContext = () => {
	// replace step useContext in child components
	const context = useContext(ProductsContext);
	return context;
};

export { ProductsProvider, useProductContext };
