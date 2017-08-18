import Generic from "./components/pages/Generic";
import Data from "./components/pages/Data";

import {
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
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
	{
		path: "/rawdata",
		title: "Raw Data",
		component: Data(rawdata),
		show: true,
	},
	{
		path: "/shapeddata",
		title: "Shaped Data",
		component: Data(sectionsList),
		show: true,
	},
];

const sectionRoutes = R.unnest(
	(sectionsList || []).map(section => [
		{
			path: `/${section.slug}`,
			title: section.title,
			component: Generic,
			exact: true,
			show: true,

			subsections: section.subsections,

			slug: section.slug,			
		},
		...(
			(section.subsections || []).map(subslug => ({
				path: `/${section.slug}/${subslug}`,
				title: subsectionsMap[subslug],
				component: Generic,
				exact: true,
				show: false,

				subsection: true,
				slug: subslug,
				parentSlug: section.slug,
			}))
		),
	])
);

routesConfig.push(...sectionRoutes);

export default routesConfig;
