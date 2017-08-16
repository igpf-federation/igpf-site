// import Home from "./components/pages/Home";
// import Book from "./components/pages/Book";
// import About from "./components/pages/About";
// import Books from "./components/pages/Books";

import Generic from "./components/pages/Generic";

// --------------------------------------------------

export default [
	{
		path: "/",
		title: "Home",
		component: () => null,
		exact: true,
		show: false,
	},
	{
		path: "/background",
		title: "Background",
		component: Generic,
		exact: true,
		show: true,
	},
];
