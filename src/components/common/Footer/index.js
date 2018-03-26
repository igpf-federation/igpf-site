import React from "react";
import styled from "styled-components";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import { withRouter, } from "react-router";
import { compose, withState, withHandlers, withProps, } from "recompose";
import { Icon, } from "../misc";

import { FunkyButton, } from "src/components/common";

import { footer, } from "../../../data";

import Links from "./Links";

// --------------------------------------------------

const Wrapper = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	${ mixins.bpEither("height", vars.dim.footer.height) } overflow: hidden;

	${ ({ theme: { footer, }, }) => `
		background-color: ${ footer };
		${
	footer && footer !== vars.colors.footer
		? ""
		: `border-top: 1px solid ${ mixins.transparent(0.2) };`
}		
	` };

	display: flex;
	justify-content: space-between;
	align-items: center;
	${ mixins.bpEither("padding", vars.dim.nav.margin) };
`;

const Left = styled.div`
	font-weight: bold;
	opacity: 0.67;
`;

const Right = styled.div`
	opacity: 0.67;
	display: flex;
	flex-direction: row;

	a {
		margin-left: 0.5em;
	}

	& > a:hover,
	& > a:active {
		text-decoration: underline;
	}
`;

// ---------------------------------

const SearchIcon = Icon;

const _SearchBar = styled.input`
	color: white;
	font-family: Frutiger, Archivo, sans-serif;
	font-size: 0.7em;
	margin-left: 0.5em;
	background-color: transparent;
	border: 0;
	width: 5em;
	transition-duration: 0.3s;
	border-radius: 3px;

	${ mixins.bp.md.min`
		line-height: 2em;
	` } &:focus {
		outline: 0;
		width: 8em;
	}

	&::placeholder {
		color: white;
	}
`;

const enhanceSearchBar = compose(
	withRouter,
	withState("searchText", "setSearchText", ""),
	withHandlers({
		onChange: ({ setSearchText, }) => e => setSearchText(e.target.value),
		onKeyUp: ({ history, searchText, setSearchText, }) => e => {
			if (e.keyCode === 13) {
				history.push(`/search/${ searchText }`);
				setSearchText("");
			}
		},
	}),
	withProps(({ searchText, }) => ({
		value: searchText,
		placeholder: "Search",
	})),
);

const SearchBar = enhanceSearchBar(_SearchBar);

// ---------------------------------

const Footer = () => (
	<Wrapper>
		<Left>
			© Islington GP Group Limited 2018
			<Links links = { footer } />
		</Left>

		<Right>
			<FunkyButton>
				<SearchIcon type = "search" />

				<SearchBar type = "text" />
			</FunkyButton>
		</Right>
	</Wrapper>
);

export default Footer;
