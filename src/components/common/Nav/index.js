import React from "react";
import styled from "styled-components";

import { Link, NavLink,  } from "react-router-dom";
import { Nav, } from 'codogo-nav';


import { withRouter, } from "react-router";
import { compose, withState, withHandlers, withProps, } from "recompose";
import { Icon, } from "../misc";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import { nav, } from "../../../data";

// ---------------------------------

const LogoImg = styled.img`
	max-width: 100%;
	margin: 0;
	display: flex;
`;

const Logo2 = (props) => (
	<Link to = "/">
		<LogoImg src = { props.src } />
	</Link>
);


const LogoImage = styled.img`
	height: 80%;
	width: auto;
`;

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	position: absolute;
	top: 0;
	bottom: 0;
	${ mixins.bpEither("left", vars.dim.nav.margin) };
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Logo = props => (
	<LogoWrapper to = "/">
		<LogoImage src = "/img/igpf-logo.png" />
	</LogoWrapper>
);

// ---------------------------------

const buttonStyle = [
	`
		display: block;
		padding: ${ vars.dim.nav.margin.xs };
		border-bottom: 1px solid ${ mixins.transparent(0.1) };

		&.active {
			font-weight: bold;
		}

		&:last-child {
			border-bottom: 0;
		}
	`,

	`
		line-height: ${ vars.dim.nav.height.other };
		padding: 0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		display: inline-block;
		height: ${ vars.dim.nav.height.other };
		border-bottom: 3px solid transparent;
		border-top: 1px solid transparent;

		&.active {
			border-bottom-color: ${ vars.colors.primary };
		}
	`,
];

const MenuLink = styled(NavLink)`
	font-size: 1.1em;

	${ mixins.bp.sm.max`${ buttonStyle[0] }` };
	${ mixins.bp.md.min`${ buttonStyle[1] }` };

	:hover {
		opacity: 0.5;
	}
`;

const FunkyButton = styled.div`
	height: auto;
	background-color: rgba(0, 0, 0, 0.25);
	border: 0;
	border-top: 2px solid transparent;
	position: relative;
	font-size: 1.1em;

	${ mixins.bp.sm.max`
		display: block;
		padding: ${ 1 * mixins.num(vars.dim.nav.margin.xs) }px;
		border-bottom: 1px solid ${ R.path([ "theme", "nav", ]) };

		&:last-child {
			border-bottom: 0;
		}
	` } ${ mixins.bp.md.min`
		padding: 0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		display: inline-block;
		border-radius: 0.2em;
		line-height: 2em;

		&:first-child {
			margin-right: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		}
	` };

	:hover {
		background-color: ${ vars.colors.primary };
	}
`;

const TranslateButton = styled(FunkyButton)`
	${ mixins.bp.sm.max`display: none;` };

	& > div {
		${ mixins.contained() };
		overflow: hidden;
		opacity: 0;
	}
`;

const SearchButton = styled(FunkyButton)``;

const SearchIcon = Icon;

const _SearchBar = styled.input`
	color: white;
	font-family: Frutiger, Archivo, sans-serif;
	font-size: 1em;
	margin-left: 0.5em;
	background-color: transparent;
	border: 0;
	width: 3em;
	transition-duration: 0.3s;

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

const Header = (props) => (
	<Nav
		logo = { <Logo src = "/img/igpf-logo.png" /> }
		font = "Helvetica"
		textTransform = { { "xs": "capitalize", "other": "capitalize", } }
		backgroundColor = { { "xs": vars.colors.gray, "other": vars.colors.gray, } }
		color = { { "xs": vars.colors.primary, "other": vars.colors.primary, } }
		shadow
	>
		{
			nav.map((route, i) => (
				<MenuLink
					key = { route.title }
					to = { route.link || route.path }
					activeClassName = "active"
					onClick = { props.close }
				>
					{ route.title }
				</MenuLink>
			))
		}
{/*
		<TranslateButton notLink >
			Translate
			
			<div id = "google_translate_element" />
		</TranslateButton>

		<SearchButton notLink >
			<SearchIcon type = "search" />

			<SearchBar type = "text" />
		</SearchButton>*/}
	</Nav>
)

export default Header;

