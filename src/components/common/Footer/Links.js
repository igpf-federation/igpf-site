import * as mixins from "codogo-utility-functions";
import * as vars from "src/styles/vars";
import { NavLink, } from "react-router-dom";

import React from "react";
import styled from "styled-components";

// --------------------------------------------------

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Links = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;

	${ mixins.xs`flex-direction: column;` }
`;

const Link = styled(NavLink)`
	border-bottom: 3px solid transparent;
	border-top: 1px solid transparent;
	color: ${ R.path([ "theme", "logo1", ]) };
	display: flex;
	flex: 1;
	font-size: 0.9em;
	font-weight: lighter;
	padding: 0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
	white-space: nowrap;

	&.active {
		font-weight: bold;
	}
`;


// --------------------------------------------------

export default props => (
	<LinksWrapper>
		<Links>
			{
				props.links.map((route, i) => (
					<Link
						key = { route.title }
						to = { route.link || route.path }
						activeClassName = "active"
						onClick = { props.close }
					>
						{ route.title }
					</Link>
				))
			}
		</Links>
	</LinksWrapper>
);
