import React from "react";
import styled, { css, } from "styled-components";
import { NavLink, } from "react-router-dom";
import { withRouter, } from "react-router";
import { compose, withState, withHandlers, withProps, } from "recompose";
import { Icon, } from "../misc";

import * as mixins from "../../style/mixins";
import * as vars from "../../style/vars";

// --------------------------------------------------

const wrapperStyle = [
	css`
		transform: translateY(${ props => ( props.open ? 0 : -110 ) }%);
		transition: 0.3s all ease-out;
		${ mixins.shadow(2) }
		position: absolute;
		left: 0;
		right: 0;
		top: ${ vars.dim.nav.height.xs };
		background-color: ${R.path([ "theme", "nav", ])};
		align-items: center;
	`,

	`
		position: absolute;
		right: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
	`,
];

const Wrapper = styled.div`
	${ mixins.xs`${ wrapperStyle[0] }` } ${ mixins.bp.sm.min`${ wrapperStyle[1] }`};
`;

const buttonStyle = [
	`
		display: block;
		padding: ${ vars.dim.nav.margin.xs };
		border-bottom: 1px solid ${ mixins.tr(0.1) };

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
			border-bottom-color: white;
		}
	`,
];

// should be Link
const Button = styled(NavLink)`
	color: ${R.path([ "theme", "logo1", ])};
	font-size: 1.1em;	

	${ mixins.xs`${ buttonStyle[0] }` }
	${ mixins.bp.sm.min`${buttonStyle[1] }` }
`;

const FunkyButton = styled.div`
	height: auto;
	background-color: rgba(0,0,0,0.25);
	
	
	border: 0;
	border-top: 2px solid transparent;
	position: relative;
	color: ${R.path([ "theme", "logo1", ])};
	font-size: 1.1em;

	${ mixins.xs`
		display: block;
		padding: ${ 1 * mixins.num(vars.dim.nav.margin.xs) }px;
		border-bottom: 1px solid ${R.path([ "theme", "nav", ])};

		&:last-child {
			border-bottom: 0;
		}
	` }
	${ mixins.bp.sm.min`
		padding: 0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		display: inline-block;
		border-radius: 0.2em;
		line-height: 2em;

		&:first-child {
			margin-right: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		}

	` }
`;

const TranslateButton = styled(FunkyButton)`
	${ mixins.xs`display: none;` }
	
	& > div {
		${mixins.contained()}
		overflow: hidden;
		opacity: 0;
	}
`;

const SearchButton = styled(FunkyButton)`
`;

const SearchIcon = Icon;

const _SearchBar = styled.input`
	color: white;
	font-family: Frutiger, Archivo, sans-serif;
	font-size: 1em;	
	margin-left: 0.5em;
	background-color: transparent;
	border: 0;

	${ mixins.bp.sm.min`
		line-height: 2em;
	` }

	&:focus {
		outline: 0;
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
		onKeyUp: ({ history, searchText, }) => e => {
			if(e.keyCode === 13) {
				history.push(`/search/${searchText}`);
			}
		},
	}),
	withProps(({
		searchText,
	}) => ({
		value: searchText,
		placeholder: "Search",
	}))
);

const SearchBar = enhanceSearchBar(_SearchBar);

const ToolsWrapper = styled.div`
	${mixins.bp.sm.min`
		padding-left: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		margin-left: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		border-left: 2px solid transparent;
	`}
`;

// --------------------------------------------------



export default props =>
	<Wrapper open = { props.open }>
		<div>
			{
				props.links
				.filter(route => route.show)
				.map((route, i) =>
					<Button
						key = { route.title }
						to = { route.link || route.path }
						activeClassName = "active"
						onClick = { props.close }
					>
						{ route.title }
					</Button>,
				)
			}
			
		</div>
		<ToolsWrapper>
			<TranslateButton>
				Translate
				<div id = "google_translate_element"></div>
			</TranslateButton>
			<SearchButton>
				<SearchIcon type = "search"/>
				<SearchBar type = "text"/>
			</SearchButton>
		</ToolsWrapper>
	</Wrapper>;

// --------------------------------------------------


