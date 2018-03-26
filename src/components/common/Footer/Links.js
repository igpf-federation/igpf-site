import React from "react";
import styled from "styled-components";
import { NavLink, } from "react-router-dom";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

// --------------------------------------------------

const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Link = styled(NavLink)`
	border-bottom: 3px solid transparent;
	border-top: 1px solid transparent;
	color: ${ R.path([ "theme", "logo1", ]) };
	display: inline-block;
	font-size: 0.9em;
	padding: 0 ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
	font-weight: lighter;

	&.active {
		font-weight: bold;
	}
`;

const Links = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	${ mixins.xs`flex-direction: column;` }
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
