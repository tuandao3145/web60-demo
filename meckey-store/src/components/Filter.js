// libraries
import React, { useState } from "react";
import {
	Checkbox,
	Menu,
	Dropdown,
	Button,
	Row,
	Col,
	Space,
	InputNumber,
	Select,
} from "antd";

import { DownOutlined } from "@ant-design/icons";

// context
import { useProductContext } from "../contexts/ProductContext";

const { Option } = Select;

// filter
export const Filter = () => {
	// using context
	const { filter, setFilter } = useProductContext();

	// handle availability checked statuses
	const [inStockChecked, setInStockChecked] = useState(false);
	const [outStockChecked, setOutStockChecked] = useState(false);

	// handle displayed values of price filter
	const [priceFrom, setPriceFrom] = useState();
	const [priceTo, setPriceTo] = useState();

	// handle availability visible
	const [availVisible, setAvailVisible] = useState(false);

	// handle price visible
	const [priceVisible, setPriceVisible] = useState(false);

	// handle not close availability dropdown after select
	const handleAvailVisibleChange = (flag) => {
		setAvailVisible(flag);
	};

	// handle not close price dropdown after select
	const handlePriceVisibleChange = (flag) => {
		setPriceVisible(flag);
	};

	// show filter
	const showFilter = () => {
		console.log("filter: ", filter);
	};

	// handle in stock filter selection
	const inStockChange = (e) => {
		const name = e.target.name;

		if (name === "inStock") {
			setInStockChecked(true);
			setOutStockChecked(false);
			let newFilter = { ...filter, inStock: 1 };
			setFilter(newFilter);
		}
		if (name === "outStock") {
			setOutStockChecked(true);
			setInStockChecked(false);
			let newFilter = { ...filter, inStock: 2 };
			setFilter(newFilter);
		}
	};

	// handle reset price
	const resetPrice = () => {
		setPriceFrom(null);
		setPriceTo(null);
		let newFilter = { ...filter, priceFrom: "", priceTo: "" };
		setFilter(newFilter);
	};

	// handle reset availability
	const resetAvailability = () => {
		setOutStockChecked(false);
		setInStockChecked(false);
		let newFilter = { ...filter, inStock: "" };
		setFilter(newFilter);
	};

	// handle price from
	const priceFromChange = (e) => {
		let value = e.target.value;
		let newFilter = { ...filter, priceFrom: value };
		setFilter(newFilter);
	};

	// handle price to
	const priceToChange = (value) => {
		let newFilter = { ...filter, priceTo: value };
		setFilter(newFilter);
	};

	// handle sorter
	const handleSorter = (value) => {
		let sorterValues = value.split("-");
		let newFilter = {
			...filter,
			fieldSort: sorterValues[0],
			typeSort: sorterValues[1],
		};
		setFilter(newFilter);
	};

	// availability filter menu
	const availabilityMenu = (
		<Menu
			items={[
				{
					label: (
						<div className="availability-label">
							<Button className="reset-filter-btn" onClick={resetAvailability}>
								Reset
							</Button>
						</div>
					),
				},
				{
					label: (
						<Checkbox
							name="inStock"
							checked={inStockChecked}
							onChange={inStockChange}
						>
							In stock
						</Checkbox>
					),
				},
				{
					label: (
						<Checkbox
							name="outStock"
							checked={outStockChecked}
							onChange={inStockChange}
						>
							Out of stock
						</Checkbox>
					),
				},
			]}
		/>
	);

	// price filter menu
	const priceMenu = (
		<Menu
			items={[
				{
					label: (
						<div className="price-label">
							<span>Highest price: $</span>
							<Button className="reset-filter-btn" onClick={resetPrice}>
								Reset
							</Button>
						</div>
					),
				},
				{
					label: (
						<div className="price-selector">
							<InputNumber
								addonBefore="From $"
								value={priceFrom}
								onChange={priceFromChange}
							/>
							<InputNumber
								addonBefore="To $"
								value={priceTo}
								onChange={priceToChange}
							/>
						</div>
					),
				},
			]}
		/>
	);

	// left filter items
	const filterMenu = [
		{
			label: <span className="filter-title">Filter:</span>,

			disabled: true,
		},
		{
			label: (
				<Dropdown
					className="availability-dropdown"
					overlay={availabilityMenu}
					trigger={["click"]}
					open={availVisible}
					onOpenChange={handleAvailVisibleChange}
				>
					<Button onClick={showFilter}>
						Availability <DownOutlined style={{ fontSize: "12px" }} />
					</Button>
				</Dropdown>
			),
			disabled: true,
		},
		{
			label: (
				<Dropdown
					className="price-dropdown"
					overlay={priceMenu}
					trigger={["click"]}
					open={priceVisible}
					onOpenChange={handlePriceVisibleChange}
				>
					<Button onClick={showFilter}>
						Price <DownOutlined style={{ fontSize: "12px" }} />
					</Button>
				</Dropdown>
			),
			disabled: true,
		},
	];

	return (
		<Row className="filter">
			<Col span={18}>
				<Menu
					className="menu"
					theme="light"
					mode="horizontal"
					items={filterMenu}
				/>
			</Col>
			<Col span={2}>Sort by:</Col>
			<Col span={4}>
				<Select
					className="sorter"
					defaultValue="name-asc"
					onChange={handleSorter}
				>
					<Option value="name-asc">Alphabetically, A-Z</Option>
					<Option value="name-desc">Alphabetically, Z-A</Option>
					<Option value="price-asc">Price, lowest-highest</Option>
					<Option value="price-desc">Price, highest-lowest</Option>
				</Select>
			</Col>
		</Row>
	);
};
