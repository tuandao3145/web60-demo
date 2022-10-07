import React, { useEffect } from "react";
import { HomeSlider } from "../components/HomeSlider";

// context
import { useProductContext } from "../contexts/ProductContext";

//components
import { Annoucements } from "../components/Annoucements";
import { Highlight } from "../components/Highlight";
import { HomeCategory } from "../components/HomeCategory";

export const Home = () => {
	// context
	const { productList, isLoading, fetchAllProducts, categoryList } =
		useProductContext();

	// reset filter

	// fetch data again
	useEffect(() => {
		let resetFilter = {
			inStock: "",
			priceFrom: "",
			priceTo: "",
			fieldSort: "name",
			typeSort: "asc",
		};
		fetchAllProducts(resetFilter);
	}, []);

	return (
		<>
			{isLoading && <h1>Loading Data ...</h1>}
			{!isLoading && (
				<div className="home">
					<HomeSlider data={[...productList]?.splice(0, 5)} />
					<Annoucements />
					<Highlight />
					<HomeCategory
						name={categoryList[3]?.name}
						id={categoryList[3]?._id}
					/>
					<HomeCategory
						name={categoryList[4]?.name}
						id={categoryList[4]?._id}
					/>
				</div>
			)}
		</>
	);
};
