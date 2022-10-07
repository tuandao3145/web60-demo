import React from "react";
import { useParams } from "react-router-dom";

export const OrderDetail = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>Details of Order with ID: {id}</h1>
		</div>
	);
};
