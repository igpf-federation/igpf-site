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

const allSectionsList = [
	...sectionsList,
	...subsectionsList,
];

const sectionsMap = makeMapUsingSlugs(sectionsList);
const subsectionsMap = makeMapUsingSlugs(subsectionsList);
const allSectionsMap = {
	...sectionsMap,
	...subsectionsMap,
};

const nav = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "nav")
	[0].fields.links
	.map(link => ({
		title: link.fields.title,
		path: "/" + slugify(link.fields.title),
	}))
);

export {
	nav,
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	allSectionsList,
	allSectionsMap,
	rawdata,
};