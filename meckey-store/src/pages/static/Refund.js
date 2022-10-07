import { Card } from "antd";
import React from "react";

export const Refund = () => {
	return (
		<div>
			<h1> Refund policy </h1>
			<Card
				style={{
					textAlign: "left",
					width: "50%",
					marginLeft: "25%",
					marginRight: "25%",
				}}
				size="middle"
			>
				<span>
					All products are new and are sold “as-is”. You are responsible for
					your purchase and we will not issue refunds for irresponsible
					purchases.{" "}
				</span>
			</Card>
		</div>
	);
};
