import _slugify from "slugify";
import marked from "marked";

import rawdata from "./rawdata";
import { objMap, } from "./lib/util";

const slugify = x => _slugify(x, {
	lower: true,
});

const makeMapUsingSlugs = list => list.reduce((acc, item) => ({
	...acc,
	[item.slug]: item,
}), {})

const sectionsList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "section")
	.map(item => {
		const slug = slugify(item.fields.title);

		return {
			...item.fields,
			image: (
				item.fields.image
				? item.fields.image.fields.file
				: {}
			),
			subsections: (
				item.fields.subsections
				? item.fields.subsections.map(R.path([ "fields", "title", ])).map(slugify)
				: []
			),
			services: (
				item.fields.services
				? item.fields.services.map(R.path([ "fields", "title", ])).map(slugify)
				: []
			),
			jobs: (
				item.fields.jobs
				? item.fields.jobs.map(R.path([ "fields", "title", ])).map(slugify)
				: []
			),
			slug,
			html: marked(item.fields.content || ""),
			path: `/${slug}`,
		}
	})
);

const subsectionsList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "subsection")
	.map(item => {
		const slug = slugify(item.fields.title);
		const parent = (
			sectionsList
			.find(section => section.subsections.includes(slug))
			.slug
		);
		
		return {
			...item.fields,
			image: (
				item.fields.image
				? item.fields.image.fields.file
				: {}
			),
			slug,
			html: marked(item.fields.content || ""),
			parent,
			path: `/${parent}/${slug}`,
			subsection: true,
			people: (
				item.fields.people
				? item.fields.people.map( person => (
					{
						...person.fields,
						picture: (
							person.fields && person.fields.picture
							? person.fields.picture.fields.file
							: {}
						),
					}
				))
				: undefined
			),
		};
	})
);

const servicesList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "service")
	.map(item => {
		const slug = slugify(item.fields.title);
		const parent = (
			sectionsList
			.find(section => section.services.includes(slug))
			.slug
		);
		
		return {
			...item.fields,
			image: (
				item.fields.image
				? item.fields.image.fields.file
				: {}
			),
			slug,
			html: marked(item.fields.content || ""),
			parent,
			path: `/services/${slug}`,
			service: true,
			people: (
				item.fields.people
				? item.fields.people.map( person => (
					{
						...person.fields,
						picture: (
							person.fields && person.fields.picture
							? person.fields.picture.fields.file
							: {}
						),
					}
				))
				: undefined
			),
		};
	})
);

const jobsList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "job")
	.map(item => {
		const slug = slugify(item.fields.title);
		const parent = (
			sectionsList
			.find(section => section.jobs.includes(slug))
			.slug
		);
		
		return {
			...item.fields,
			image: (
				item.fields.image
				? item.fields.image.fields.file
				: {}
			),
			slug,
			html: marked(item.fields.content || ""),
			parent,
			path: `/jobs/${slug}`,
			job: true,
			people: (
				item.fields.people
				? item.fields.people.map( person => (
					{
						...person.fields,
						picture: (
							person.fields && person.fields.picture
							? person.fields.picture.fields.file
							: {}
						),
					}
				))
				: undefined
			),
		};
	})
);

const allSectionsList = [
	...sectionsList,
	...subsectionsList,
	...servicesList,
	...jobsList,
];

const sectionsMap = makeMapUsingSlugs(sectionsList);
const subsectionsMap = makeMapUsingSlugs(subsectionsList);
const servicesMap = makeMapUsingSlugs(servicesList);
const jobsMap = makeMapUsingSlugs(jobsList);
const allSectionsMap = {
	...sectionsMap,
	...subsectionsMap,
	...servicesMap,
	...jobsMap,
};

const nav = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "nav")
	[1]//.filter(item => item.type === "nav")
	.fields.links
	.map(link => ({
		title: link.fields.title,
		path: "/" + slugify(link.fields.title),
	}))
);

const footer = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "nav")
	[0]//.filter(item => item.type === "footer")
	.fields.links
	.map(link => ({
		title: link.fields.title,
		path: "/" + slugify(link.fields.title),
	}))
);

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
};