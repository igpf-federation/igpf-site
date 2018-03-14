import React from "react";
import styled, { css, } from "styled-components";
import { NavLink, } from "react-router-dom";
import { withRouter, } from "react-router";
import { compose, withState, withHandlers, withProps, } from "recompose";
import { Icon, } from "../misc";

import * as mixins from "../../style/mixins";
import * as vars from "../../style/vars";

// --------------------------------------------------

const Wrapper = styled.div`
	display: inline-block;
	margin-left: 1em;
`;

const Button = styled(NavLink)`
	border-bottom: 3px solid transparent;
	border-top: 1px solid transparent;
	color: ${ R.path([ "theme", "logo1", ]) };
	display: inline-block;
	font-size: 0.9em;
	height: ${ vars.dim.nav.height.other };
	line-height: ${ vars.dim.nav.height.other };
	padding: 0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
	font-weight: lighter;

	&.active {
		border-bottom-color: white;
	}
`;

// --------------------------------------------------

export default props => (
	<Wrapper>
		{props.links.map((route, i) => (
			<Button
				key = { route.title }
				to = { route.link || route.path }
				activeClassName = "active"
				onClick = { props.close }
			>
				{route.title}
			</Button>
		))}
	</Wrapper>
);
