import React from "react";
import styled from "styled-components";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../style/vars";

import { footer, } from "../../../data";

import Links from "./Links";

import { Icon, } from "./../misc";

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
	font-size: 1.5em;

	a {
		margin-left: 0.5em;
	}

	& > a:hover,
	& > a:active {
		text-decoration: underline;
	}
`;

const Divider = styled.span`
	margin: 0 0.5em;
`;

const Footer = () => (
	<Wrapper>
		<Left>
			© Islington GP Group Limited 2018
			<Links links = { footer } />
		</Left>

		<Right>
			<a href = "#">
				<Icon type = "facebook-square" />
			</a>

			<a href = "#">
				<Icon type = "twitter" />
			</a>
		</Right>
	</Wrapper>
);

export default Footer;
