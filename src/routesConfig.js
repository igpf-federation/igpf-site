import Generic from "./components/pages/Generic";
import Data from "./components/pages/Data";
import NotFound from "./components/pages/404";
import Search from "./components/pages/Search";

import {
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	allSectionsList,
	rawdata,
} from "src/data";

// --------------------------------------------------

const routesConfig = [
	{
		path: "/",
		title: "Home",
		component: () => null,
		exact: true,
		show: false,
	},
	// {
	// 	path: "/rawdata",
	// 	title: "Raw Data",
	// 	component: Data(rawdata),
	// 	show: true,
	// },
	// {
	// 	path: "/shapeddata",
	// 	title: "Shaped Data",
	// 	component: Data(sectionsList),
	// 	show: true,
	// },
	{
		path: "/search/:query",
		title: "Search",
		component: Search,
	},
];

const sectionRoutes = allSectionsList.map(o => {
	const {
		title,
		slug,
		parent,
		path,
		subsections,
		subsection,
	} = o;

	return {
		title,
		slug,
		parent,
		path,
		subsections,
		subsection,

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
