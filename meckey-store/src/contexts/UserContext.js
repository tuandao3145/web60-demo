// libraries
import React, { createContext, useState, useEffect, useContext } from "react";
import userApi from "../api/userApi";

// define context
const UserContext = createContext();

// main component
const UserProvider = ({ children }) => {
	// handle current
	const [currentUser, setCurrentUser] = useState();

	// login user
	const loginUser = (email, password) => {
		let user = userApi.login(email, password);
		if (user) {
			setCurrentUser(user);
		}
		return user;
	};

	// values of context
	const value = {
		currentUser,
		loginUser,
	};

	return (
		// replace step call provider in child components
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};

const useUserContext = () => {
	// replace step useContext in child components
	const context = useContext(UserContext);
	return context;
};

export { UserProvider, useUserContext };
