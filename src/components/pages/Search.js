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

import { allSectionsList, } from "src/data";

// --------------------------------------------------

const ResultWrapper = styled(GridCell)`
	max-width: 700px;
`;

const ResultInner = styled(GridCell)`
	background-color: #eee;
`;

// --------------------------------------------------

const match = (str, query) =>
	str.toLowerCase().indexOf(query.toLowerCase()) > -1;

const findMatches = query => {
	const matches = [];
	allSectionsList.forEach(o => {
		if (
			(o.title && match(o.title, query)) ||
			(o.html && match(o.html, query))
		) {
			matches.push(o);
		}
	});
	return matches;
};

const Search = ({ match: { params: { query, }, }, }) =>
	<Container>
		<TextCell>
			<h1>
				Search results for "{query}":
			</h1>
		</TextCell>
		{findMatches(query).map(o =>
			<ResultWrapper key = { o.slug }>
				<Link to = { o.path }>
					<ResultInner>
						<TextCell>
							<h2>
								{o.title}
							</h2>
							<p>{`${window.location.origin}${o.path}`}</p>
						</TextCell>
					</ResultInner>
				</Link>
			</ResultWrapper>,
		)}
	</Container>;

export default Search;
