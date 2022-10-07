// libraries
import React from "react";
import { List, Space } from "antd";

// components
import { ProductCard } from "./ProductCard";

// products list component
export const ProductsList = ({ data, isLoading }) => {
	// render
	return (
		<>
			{isLoading && <h1>Loading Data ...</h1>}

			{!isLoading && (
				<div className="product-list">
					<Space>
						<List
							grid={{ gutter: 16, column: 4 }}
							dataSource={data}
							renderItem={(item) => (
								<List.Item>
									<ProductCard product={item} />
								</List.Item>
							)}
						/>
					</Space>
				</div>
			)}
		</>
	);
};
