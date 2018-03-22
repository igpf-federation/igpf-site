import React from "react";
import styled from "styled-components";

import { Link, NavLink,  } from "react-router-dom";
import { Nav, } from 'codogo-nav';

import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import {
	nav,
	siteSettings,
} from "src/data";

// ---------------------------------

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	${ mixins.bpEither("left", vars.dim.nav.margin) };
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 75%;
`;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	object-position: left;
`;

const Logo = props => (
	<LogoWrapper to = "/">
		<LogoImage src = { siteSettings.logo.fields.file.url } />
	</LogoWrapper>
);

// ---------------------------------

const Header = (props) => (
	<Nav
		logo = { <Logo /> }
		fontSize = { { "xs": "0.7em", "other": "0.8em", } }
		textTransform = { { "xs": "capitalize", "other": "capitalize", } }
		backgroundColor = { { "xs": vars.colors.gray, "other": vars.colors.gray, } }
		color = { { "xs": vars.colors.primary, "other": vars.colors.primary, } }
		shadow
	>
		{
			nav.map((route, i) => (
				<NavLink
					key = { route.title }
					to = { route.link || route.path }
					activeClassName = "active"
					onClick = { props.close }
				>
					{ route.title }
				</NavLink>
			))
		}
	</Nav>
)

export default Header;