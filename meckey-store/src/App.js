// css
import "./assets/css/App.css";
import "antd/dist/antd.min.css";

// libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context providers
import { ProductsProvider } from "./contexts/ProductContext";
import { UserProvider } from "./contexts/UserContext";

// pages / components
import { Common } from "./components/layout/Common";
import { Home } from "./pages/Home";
import { AllProducts } from "./pages/AllProducts";
import { ProductDetail } from "./pages/ProductDetail";
import { AllOrders } from "./pages/AllOrders";
import { OrderDetail } from "./pages/OrderDetail";

// static pages
import { NoPage } from "./pages/static/NoPage";
import { About } from "./pages/static/About";
import { Category } from "./pages/Category";
import { Privacy } from "./pages/static/Privacy";
import { Refund } from "./pages/static/Refund";
import { Shipping } from "./pages/static/Shipping";
import { Terms } from "./pages/static/Terms";

// static annoucement pages
import { AnnoucementOne } from "./pages/static/annoucements/AnnoucementOne";
import { AnnoucementTwo } from "./pages/static/annoucements/AnnoucementTwo";
import { AnnoucementThree } from "./pages/static/annoucements/AnnoucementThree";

// main app
function App() {
	// render app
	return (
		<div className="main-app">
			<UserProvider>
				<ProductsProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Common />}>
								<Route index element={<Home />} />
								<Route path="/products">
									<Route path="all">
										<Route path=":pageID" element={<AllProducts />} />
									</Route>
									<Route path=":id" element={<ProductDetail />} />
								</Route>
								<Route path="/orders" element={<AllOrders />}>
									<Route path=":id" element={<OrderDetail />} />
								</Route>
								<Route path="/products/category">
									<Route
										path=":id/:name"
										element={<Category title={""} newID={""} />}
									/>
								</Route>

								<Route path="/about" element={<About />} />

								<Route path="/privacy" element={<Privacy />} />
								<Route path="/refund" element={<Refund />} />
								<Route path="/shipping" element={<Shipping />} />
								<Route path="/terms" element={<Terms />} />

								<Route path="/anncoucement_1" element={<AnnoucementOne />} />
								<Route path="/anncoucement_2" element={<AnnoucementTwo />} />
								<Route path="/anncoucement_3" element={<AnnoucementThree />} />

								<Route path="*" element={<NoPage />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</ProductsProvider>
			</UserProvider>
		</div>
	);
}

export default App;
