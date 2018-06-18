import { Link, NavLink, } from "react-router-dom";
import { nav, siteSettings, } from "src/data";
import { Nav, } from "codogo-nav";
import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";
import React from "react";
import styled from "styled-components";

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

const Logo = () => (
	<LogoWrapper to = "/">
		<LogoImage src = { siteSettings.logo.fields.file.url } />
	</LogoWrapper>
);

// ---------------------------------

const Header = props => (
	<Nav
		logo = { <Logo /> }
		fontSize = { { xs: "1.1em", other: "0.9em", } }
		backgroundColor = { { xs: vars.colors.gray, other: vars.colors.gray, } }
		highlightColor = { { xs: vars.colors.primary, other: vars.colors.primary, } }
		shadow
		fixed
		underlineColor = { vars.colors.primary }
		links = {
			nav.map((route) => {
				return {
					as: "nav-link",
					to: route.link || route.path,
					onClick: props.close,
					content: route.title, 
				};
			})
		}
	/>
);

export default Header;
