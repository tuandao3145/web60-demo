// libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Carousel, Col, Image, Row } from "antd";

export const HomeSlider = ({ data }) => {
	// render
	return (
		<div className="slider">
			<Carousel autoplay={true}>
				{data?.map((product) => {
					return (
						<Image src={product.imageMain} width={"70%"} preview={false} />
					);
				})}
			</Carousel>
			<Button>
				<NavLink to={"/products/all"}>View All</NavLink>
			</Button>
		</div>
	);
};
