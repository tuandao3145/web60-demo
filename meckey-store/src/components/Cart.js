import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Cart = () => {
	const [data, setData] = useState();

	return (
		<>
			<ShoppingCartOutlined />
		</>
	);
};
