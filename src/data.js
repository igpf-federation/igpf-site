import _slugify from "slugify";
import marked from "marked";

import rawdata from "./rawdata";

const slugify = x =>
	(x
		? _slugify(x, {
			lower: true,
		  })
		: ""
	).replace(":", "-");

const makeMapUsingSlugs = list =>
	list.reduce(
		(acc, item) => ({
			...acc,
			[item.slug]: item,
		}),
		{},
	);

const _siteSettings = rawdata.items
	.filter(item => item.sys.contentType.sys.id === "siteSettings")
	.map(item => {
		return {
			...item.fields,
			homepageContentHTML: marked(item.fields.homepageContent),
			homepageSidebarHTML: marked(item.fields.homepageSidebar),
		};
	});
const siteSettings = _siteSettings[0];

const sectionsList = rawdata.items
	.filter(item => item.sys.contentType.sys.id === "section")
	.map(item => {
		const slug = slugify(item.fields.title);

		return {
			...item.fields,
			image: item.fields.image ? item.fields.image.fields.file : {},
			subsections: item.fields.subsections
				? item.fields.subsections
					.map(R.path([ "fields", "title", ]))
					.map(slugify)
				: [],
			services: item.fields.services
				? item.fields.services
					.map(R.path([ "fields", "title", ]))
					.map(slugify)
				: [],
			jobs: item.fields.jobs
				? item.fields.jobs.map(R.path([ "fields", "title", ])).map(slugify)
				: [],
			slug,
			html: marked(item.fields.content || ""),
			path: `/${ slug }`,
		};
	});

const lists = R.map(contentType => {
	return rawdata.items
		.filter(item => item.sys.contentType.sys.id === contentType)
		.map(item => {
			const slug = slugify(item.fields.title);
			const parent = (
				sectionsList.find(section =>
					section[contentType + "s"].includes(slug),
				) || {}
			).slug;

			return {
				...item.fields,
				image:
					item.fields.image && item.fields.image.fields
						? item.fields.image.fields.file
						: {},
				slug,
				html: marked(item.fields.content || ""),
				parent,
				path: `/${
					contentType === "subsection" ? parent : contentType + "s"
				}/${ slug }`,
				[contentType]: true,
				people: item.fields.people
					? item.fields.people.map(person => ({
						...person.fields,
						image:
								person.fields &&
								person.fields.image &&
								person.fields.image.fields
									? person.fields.image.fields.file
									: {},
					  }))
					: undefined,
			};
		});
})({
	subsection: "subsection",
	service: "service",
	job: "job",
});

const sectionsMap = makeMapUsingSlugs(sectionsList);
const maps = R.map(makeMapUsingSlugs)(lists);

const subsectionsList = lists.subsection;
const subsectionsMap = maps.subsection;
const servicesList = lists.service;
const servicesMap = maps.service;
const jobsList = lists.job;
const jobsMap = maps.job;

const allSectionsList = [
	...sectionsList,
	...subsectionsList,
	...servicesList,
	...jobsList,
];

const allSectionsMap = {
	...sectionsMap,
	...subsectionsMap,
	...servicesMap,
	...jobsMap,
};

const shapeLink = link => {
	const title = R.path([ "fields", "title", ])(link);
	return {
		title,
		path: "/" + slugify(title),
	};
};

const nav = rawdata.items
	.filter(item => item.sys.contentType.sys.id === "nav")[0] //.filter(item => item.type === "nav")
	.fields.links.map(shapeLink);

const footer = rawdata.items
	.filter(item => item.sys.contentType.sys.id === "nav")[1] //.filter(item => item.type === "footer")
	.fields.links.map(shapeLink);

export {
	nav,
	footer,
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	servicesList,
	servicesMap,
	jobsList,
	jobsMap,
	allSectionsList,
	allSectionsMap,
	rawdata,
	siteSettings,
};
