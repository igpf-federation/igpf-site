import _slugify from "slugify";
import marked from "marked";

import rawdata from "./rawdata";
import { objMap, } from "./lib/util";

const slugify = x => _slugify(x, {
	lower: true,
});

const sectionsList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "section")
	.map(item => ({
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
		slug: slugify(item.fields.title),
		html: marked(item.fields.content),
	}))
);

const subsectionsList = (
	rawdata.items
	.filter(item => item.sys.contentType.sys.id === "subsection")
	.map(item => ({
		...item.fields,
		image: (
			item.fields.image
			? item.fields.image.fields.file
			: {}
		),
		slug: slugify(item.fields.title),
		html: marked(item.fields.content),
	}))
);

const makeMapUsingSlugs = list => list.reduce((acc, item) => ({
	...acc,
	[item.slug]: item,
}), {})

const sectionsMap = makeMapUsingSlugs(sectionsList);
const subsectionsMap = makeMapUsingSlugs(subsectionsList);
const allSectionsMap = {
	...sectionsMap,
	...subsectionsMap,
};

export {
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	allSectionsMap,
	rawdata,
};