import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const Common = () => {
	return (
		<div className="common-layout">
			<NavBar />
			<div className="common-body">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};
