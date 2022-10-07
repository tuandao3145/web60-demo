import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Col, Image, Menu, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useProductContext } from "../../contexts/ProductContext";
import { SearchBar } from "../SearchBar";
import { Cart } from "../Cart";

const avaURL =
	"https://cdn.shopify.com/s/files/1/0299/9497/5365/files/logo_9036676e-1709-4680-9f5a-97e5d10a93ae_90x.png?v=1630939482";

export const NavBar = () => {
	const { categoryList } = useProductContext();

	const leftMenu = [
		{
			label: (
				<Image
					className="shop-ava"
					src={avaURL}
					size={"100px"}
					preview={false}
				/>
			),
			disabled: true,
		},
		{
			label: <NavLink to="/">Home</NavLink>,
			key: "home",
		},
		{
			label: "Keyboard Kit",
			key: "category",
			children: categoryList?.map((category) => {
				return {
					label: (
						<NavLink
							to={"/products/category/" + category._id + "/" + category.name}
						>
							{category.name}
						</NavLink>
					),
					key: category.id,
				};
			}),
		},
		{
			label: <NavLink to="/products/all/1">Catalog</NavLink>,
			key: "catalog",
		},
		{
			label: <NavLink to="/about">About Us</NavLink>,
			key: "about",
		},
	];
	const rightMenu = [
		{
			label: <SearchBar />,
			onClick: () => {
				console.log("hi");
			},
		},
		{
			label: <Avatar size="small" icon={<UserOutlined />} />,
		},
		{
			label: <Cart />,
		},
	];

	const [current, setCurrent] = useState("home");

	const onClick = (e) => {
		if (e.key) {
			setCurrent(e.key);
		}
	};

	return (
		<Row className="nav-bar">
			<Col span={20}>
				<Menu
					className="left-nav"
					theme="light"
					onClick={onClick}
					selectedKeys={[current]}
					mode="horizontal"
					items={leftMenu}
				/>
			</Col>
			<Col span={4}>
				<Menu
					className="right-nav"
					theme="light"
					onClick={onClick}
					selectedKeys={[current]}
					mode="horizontal"
					items={rightMenu}
				/>
			</Col>
		</Row>
	);
};
