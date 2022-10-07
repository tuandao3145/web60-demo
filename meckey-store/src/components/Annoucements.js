import { List, Card, Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

export const Annoucements = () => {
	const { Meta } = Card;

	const data = [
		{
			title: "Dracula Hogwig Raffle Sale",
			route: "/anncoucement_1",
			imgSrc:
				"https://cdn.shopify.com/s/files/1/0299/9497/5365/articles/dracu_hogwig_1100x.jpg?v=1663305431",
		},
		{
			title: "Dracula Herold Raffle Sale",
			route: "/anncoucement_2",
			imgSrc:
				"//cdn.shopify.com/s/files/1/0299/9497/5365/articles/2_-_RBCNONH_1100x.jpg?v=1662729776",
		},
		{
			title: "Noface Herold Raffle",
			route: "/anncoucement_3",
			imgSrc:
				"//cdn.shopify.com/s/files/1/0299/9497/5365/articles/c9QD2mM_1100x.jpg?v=1660998132",
		},
	];

	return (
		<div className="annouce">
			<h1 className="annouce-title">Annoucements</h1>
			<List
				grid={{ gutter: 16, column: 3 }}
				dataSource={data}
				renderItem={(item) => (
					<NavLink to={item.route}>
						<List.Item>
							<Card
								className="product-card"
								hoverable
								cover={<img alt="example" src={item.imgSrc} />}
							>
								<Meta title={item.title} />
							</Card>
						</List.Item>
					</NavLink>
				)}
			/>
		</div>
	);
};
