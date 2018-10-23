import * as data from "src/data";

import Data from "./components/pages/Data";
import Generic from "./components/pages/Generic";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/404";
import Search from "./components/pages/Search";

// --------------------------------------------------

const routesConfig = [
	{
		path: "/",
		title: "Home",
		component: Home,
		exact: true,
		show: false,
	},
	{
		path: "/shapeddata",
		title: "Shaped Data",
		component: Data(data),
		show: false,
	},
	{
		path: "/search/:query",
		title: "Search",
		component: Search,
	},
];

const sectionRoutes = data.allSectionsList.map(o => {
	const {
		title,
		slug,
		parent,
		path,
		subsections,
		subsection,
		services,
		service,
		jobs,
		job,
	} = o;

	return {
		title,
		slug,
		parent,
		path,
		subsections,
		subsection,
		services,
		service,
		jobs,
		job,

		component: Generic,
		exact: true,
		show: !subsection,
	};
});

routesConfig.push(...sectionRoutes);

routesConfig.push({
	component: NotFound,
});

export default routesConfig;
