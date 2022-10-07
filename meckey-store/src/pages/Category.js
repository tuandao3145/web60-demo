import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Filter } from "../components/Filter";

// components
import { ProductsList } from "../components/ProductList";

// context
import { useProductContext } from "../contexts/ProductContext";

// category detail
export const Category = () => {
	let { id, name } = useParams();

	// handle products list of category
	const [categoryData, setCategoryData] = useState();

	// using context
	const { isLoading, fetchCategoryProducts } = useProductContext();

	// fetch products of a category
	const getCategoryProducts = async (id) => {
		let categoryProducts = await fetchCategoryProducts(id);
		setCategoryData(categoryProducts.product);
	};

	// fetch data every load this component
	useEffect(() => {
		getCategoryProducts(id);
	}, [id]);

	// render
	return (
		<>
			<h1 className="product-list-title">{name}</h1>
			<Filter />
			<ProductsList data={categoryData} isLoading={isLoading} />
		</>
	);
};
