import { Card } from "antd";
import React from "react";

export const Shipping = () => {
	return (
		<div>
			<h1> Shipping policy </h1>
			<Card
				style={{
					textAlign: "left",
					width: "50%",
					marginLeft: "25%",
					marginRight: "25%",
				}}
				size="middle"
			>
				<div class="rte">
					<p>
						Once a package has entered the possession of the postal service/
						company, we cannot be held responsible for any damaged goods
						delivered by the postal service/ company. We are also not
						responsible for the failure of delivery of items due to factors
						outside of our control.
					</p>
					<p>
						If any address presents an error in our system, we will not ship to
						that address and will reach out for a new address or a correct of
						said address. Your options will be to ship to a new address or have
						your order refunded.
					</p>
					<p>
						All international order will be shipped with&nbsp;VietnamPost
						(deliver in 2 to 3 weeks) or express package of EMS and DHL (deliver
						in 3 to 5 working days). We are not able to verify international
						addresses, so we will ship to the address included with the order.
						Therefore we are not responsible the products fail to deliver due to
						an incorrect address.
					</p>
				</div>
			</Card>
		</div>
	);
};
