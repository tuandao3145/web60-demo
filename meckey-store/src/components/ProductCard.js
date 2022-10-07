// libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "antd";

// define meta of card
const { Meta } = Card;

export const ProductCard = ({ product }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<NavLink to={"/products/" + product._id}>
				<Card
					className="product-card"
					hoverable
					cover={<img alt="example" src={product.imageMain} />}
				>
					<Meta title={product.name} />
					<Meta title={product.price + " $"} />
				</Card>
			</NavLink>
		</div>
	);
};
