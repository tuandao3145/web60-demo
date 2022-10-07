// libraries
import { Space } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Filter } from "../components/Filter";
import { ProductsList } from "../components/ProductList";

// context
import { useProductContext } from "../contexts/ProductContext";

export const AllProducts = () => {
	// using context
	const { filter, setFilter, productList, isLoading, fetchAllProducts } =
		useProductContext();

	const { pageID } = useParams();

	useEffect(() => {
		let newFilter = { ...filter, pageNumber: pageID };
		setFilter(newFilter);
		fetchAllProducts(newFilter);
	}, [pageID]);

	// render
	return (
		<div className="product-list">
			<Space direction="vertical" size="large" className="product-list-title">
				<h1>Products</h1>
			</Space>
			<Space direction="vertical" size="large">
				<Filter />
			</Space>
			<ProductsList data={productList} isLoading={isLoading} />
		</div>
	);
};
