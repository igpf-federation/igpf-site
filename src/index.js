import React from "react";
import App from "./App";
import { render, } from "react-snapshot";

render(<App />, document.getElementById("root"));

// Unregister service workers
navigator &&
navigator.serviceWorker &&
navigator.serviceWorker.getRegistrations().then(registrations => {
	registrations.forEach(reg => {
		reg.unregister();
	});
});