import { Col, Menu, Row, Space } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	FacebookFilled,
	InstagramOutlined,
	YoutubeOutlined,
} from "@ant-design/icons";

import { DiscordIcon } from "../../util/customIcons";

export const Footer = () => {
	const quickLinks = [
		<NavLink to="/privacy">Privacy Policy</NavLink>,
		<NavLink to="/refund">Refund Policy</NavLink>,
		<NavLink to="/refund">Shipping Policy</NavLink>,
		<NavLink to="/terms">Terms of Service</NavLink>,
	];

	// render
	return (
		<>
			<div className="footer-container">
				<Row className="connect">
					<Col span={12} className="links">
						<h3 className="title">Quick Links</h3>
						{quickLinks.map((link) => (
							<Row className="link">{link}</Row>
						))}
					</Col>
					<Col className="discord" span={12}>
						<Row>
							<h3> Join us on our Discord Community</h3>
						</Row>
						<Row>
							You could join our
							<a
								style={{ marginLeft: "1%", marginRight: "1%" }}
								href="https://discord.com/"
							>
								Discord here
							</a>
							for Sale Annoucements
						</Row>
					</Col>
				</Row>
				<Row className="social">
					<a href="https://www.facebook.com/">
						<FacebookFilled />
					</a>

					<a href="https://www.instagram.com/">
						<InstagramOutlined />
					</a>

					<a href="https://discord.com/">
						<DiscordIcon />
					</a>

					<a href="https://www.youtube.com/">
						<YoutubeOutlined />
					</a>
				</Row>
			</div>
		</>
	);
};
