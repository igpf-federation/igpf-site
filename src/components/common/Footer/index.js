import * as mixins from "codogo-utility-functions";
import * as vars from "../../../styles/vars";
import { FunkyButton, } from "../../../components/common";
import { Icon, } from "../misc";
import { compose, withState, withHandlers, withProps, } from "recompose";
import { footer, } from "../../../data";
import { withRouter, } from "react-router";

import Links from "./Links";
import React from "react";
import styled from "styled-components";

// --------------------------------------------------

const FooterWrapper = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	${ mixins.bpEither("height", vars.dim.footer.height) };
	${ mixins.bpEither("padding", vars.dim.nav.margin) };
	${ 
	({ theme: { footer, }, }) => `
			background-color: ${ footer };
			${ footer && 
				footer !== vars.colors.footer
		? ""
		: `border-top: 1px solid ${ mixins.transparent(0.2) };`
}		
	` };
`;

const FooterCredits = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0.5em;
	font-size: 0.8em;
	${ mixins.bp.sm.min`flex: 1;` }
	${ mixins.xs`flex-grow: 1;` }
	${ mixins.xs`flex-direction: column;` }
`;


const FooterCredit = styled.div`
	font-size: 0.8em;
	margin: 0 0.5em;
`;

const FooterLinks = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0.5em;
	${ mixins.bp.sm.min`flex: 1;` }
	${ mixins.xs`flex-grow: 1;` }
`;

const FooterLogoWrapper = styled.div`
	flex: 2;
	display: flex;
	margin: 0.5em;
`;

const FooterLogo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

// ---------------------------------

const SearchWrapper = styled.div`
	${ mixins.bp.sm.min`flex: 1;` }
`;

const SearchIcon = Icon;

const _SearchBar = styled.input`
	color: white;
	font-family: Frutiger, Archivo, sans-serif;
	font-size: 0.7em;
	margin-left: 0.5em;
	background-color: transparent;
	border: 0;
	width: 10em;
	transition-duration: 0.3s;
	border-radius: 3px;

	${ mixins.bp.md.min`
		line-height: 2em;
	` };

	&:focus {
		outline: 0;
		width: 15em;
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
	<FooterWrapper>
		<FooterLogoWrapper>
			<FooterLogo src = "/img/igpgroup-logo.png"/>
		</FooterLogoWrapper>

		<FooterLinks>
			<Links links = { footer } />
		</FooterLinks>

		<SearchWrapper>
			<FunkyButton>
				<SearchIcon type = "search" />

				<SearchBar type = "text" />
			</FunkyButton>
		</SearchWrapper>

		<FooterCredits>
			<FooterCredit>&#169; Islington GP Group Limited 2018</FooterCredit>

			<FooterCredit>Registered Company Number 07384595</FooterCredit>
		</FooterCredits>
	</FooterWrapper>
);

export default Footer;
