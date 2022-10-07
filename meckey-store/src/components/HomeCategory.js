import React from "react";
import { ProductsList } from "../components/ProductList";

// context
import { useProductContext } from "../contexts/ProductContext";

export const HomeCategory = ({ name, id }) => {
	// using context
	const { productList, isLoading } = useProductContext();

	// data
	let data = [...productList].filter((product) => product.category._id === id);

	//render
	return (
		<div className="home-category">
			<h1 className="home-category-title">{name}</h1>
			<ProductsList data={data} isLoading={isLoading} />
		</div>
	);
};
