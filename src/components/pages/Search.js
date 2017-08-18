import styled from "styled-components";
import { Link, } from "react-router-dom";

import {
	Container,
	GridCell,
	TextCell,
	FullWidthImg,
	Para,
	Button,
	PSpacing,
} from "../common";

import * as vars from "../style/vars";
import * as mixins from "../style/mixins";
import { objMap, randomInt, } from "../../lib/util";

import {
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	allSectionsMap,
} from "src/data";

// --------------------------------------------------

const Search = ({ match: { params: { query, }, }, }) => (
	<Container>
		<h1>{ query }</h1>
	</Container>
);

export default Search;