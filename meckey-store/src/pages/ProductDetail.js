// libraries
import { Col, Image, Row, List, Radio, Space } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

// context
import { useProductContext } from "../contexts/ProductContext";

// product detail component
export const ProductDetail = () => {
	const { id } = useParams();

	// using context
	const { isLoading, fetchProductDetail } = useProductContext();

	// handle product detail
	const [productData, setProductData] = useState();

	// handle attribute value
	const [value, setValue] = useState();

	// handle selected options
	const [options, setOptions] = useState();

	// handle option list
	const [optionList, setOptionList] = useState();

	// handle selected variant
	const [variant, setVariant] = useState();

	// handle quanity
	const [qty, setQty] = useState(1);

	// get product detail
	const getProductDetail = async (id) => {
		let data = await fetchProductDetail(id);
		console.log("main", data);
		if (data) {
			setProductData(data);
			setOptions(data.result);
			setVariant(data.product);
			setOptionList(data.result);
		}
	};

	// handle find variant
	const getVariant = () => {
		let result = productData?.product.variants.find((item) => {
			if (JSON.stringify(item.attributes) === JSON.stringify(options)) {
				return item;
			}
		});

		if (result) {
			setVariant(result);
			console.log("new variant: ", variant);
		}
	};

	// fetch data every load this component
	useEffect(() => {
		getProductDetail(id);
		console.log("re-run");
	}, []);

	// get variant
	useEffect(() => {
		getVariant();
	}, [options]);

	// css for button in variant
	const radioStyle = {
		height: "30px",
		lineHeight: "30px",
		margin: "10px 10px",
		borderRadius: "20px",
	};

	// handle variants list after fetching
	const variantOptions = optionList
		? optionList.map((attribute) => {
				return {
					name: attribute.name,
					value: attribute.value.map((item) => {
						return {
							label: item,
							value: attribute?.name + "-" + item,
							style: radioStyle,
						};
					}),
				};
		  })
		: [];

	// handle select variant
	const onSelect = (e) => {
		setValue(e.target.value);
		console.log("current select: ", options);
		let variantType = e.target.value.split("-")[0];
		let variantValue = e.target.value.split("-")[1];
		let newOptions = [...options]?.map((type) => {
			if (type.name === variantType) {
				type.value = variantValue;
			}
			return type;
		});
		setOptions(newOptions);
		console.log("new select: ", options);
	};

	// handle increase
	const increaseQty = () => {
		if (qty < variant.countInStock) setQty(qty + 1);
	};

	// handle increase
	const decreaseQty = () => {
		if (qty > 1) setQty(qty - 1);
	};

	// render
	return (
		<>
			{isLoading && <h1>Loading Data ...</h1>}
			{productData && (
				<div className="product-detail">
					<Row>
						<Col span={16} className="product-gallery">
							<Row>
								<Image
									className="product-img"
									src={productData.product?.imageDetails[0]}
								/>
							</Row>
							<Row>
								<List
									grid={{
										gutter: 16,
										column: 2,
									}}
									dataSource={[...productData.product?.imageDetails].slice(1)}
									renderItem={(item) => (
										<List.Item>
											<Image className="product-img" src={item} />
										</List.Item>
									)}
								/>
							</Row>
						</Col>
						<Col span={8} className="product-info">
							<h4 className="product-category">
								{productData.product.category.name}
							</h4>
							<h1 className="product-name">{productData.product.name}</h1>
							<h2 className="product-price">$ {variant.price} USD</h2>

							{variantOptions.map((variantType) => {
								return (
									<>
										<h3>{variantType.name}</h3>
										<Radio.Group
											options={variantType.value}
											value={value}
											optionType="button"
											buttonStyle="solid"
											onChange={onSelect}
										/>
									</>
								);
							})}
							<h2>Quantity</h2>
							<div>
								<MinusCircleOutlined onClick={decreaseQty} />
								<Space size="large">{qty}</Space>
								<PlusCircleOutlined onClick={increaseQty} />
							</div>
						</Col>
					</Row>
				</div>
			)}
		</>
	);
};
