import React from "react";
import styled, { css, } from "styled-components";
import R from "ramda";
import { Link, } from "react-router-dom";
import MQ from "react-responsive";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../styles/vars";
import { objMap, } from "../../lib/util";

// --------------------------------------------------

export const GridCell = styled.div`
	${ mixins.bpEach("padding", vars.dim.gutter.half) };
	${ p => (p.flex ? `flex: ${ p.flex };` : "") };
`;

export const TextBox = styled.div`
	${ p => (p.bold ? "font-weight: bold;" : "") };
	${ p => (p.align ? `text-align: ${ p.align };` : "") };
`;

export const TextCell = props => (
	<GridCell { ...props }>
		<TextBox { ...R.pick([ "bold", "align", ])(props) }>
			{props.children}
		</TextBox>
	</GridCell>
);

export const Container = styled.div`
	${ mixins.bpEach("padding", vars.dim.gutter.container) } ${ p =>
	p.fullWidth ? "" : `max-width: ${ p.maxWidth || vars.bps.lg.min }px` };
	margin: auto;
	${ p => (p.rel ? "position: relative;" : "") } ${ p =>
	p.border ? `border-bottom: 1px solid ${ vars.colors.lines };` : "" } ${ p =>
	p.center ? "text-align: center;" : "" };
`;

const bgTint = 0.3;
export const Bg = styled.div`
	${ p =>
		p.image
			? `
		background-image:
			linear-gradient( rgba(0,0,0,${ p.tint || bgTint }), rgba(0,0,0,${ p.tint ||
					bgTint }) ),
			url(${ p.image });
		background-size: cover;
		background-position: center center;
	`
			: "" } ${ p => (p.color ? `background-color: ${ p.color };` : "") };
`;

export const Para = props => (
	<div>
		{props.children
			.split("\n")
			.map((p, i) => <p key = { `${ p.slice(0, 5) }/${ i }` }>{p}</p>)}
	</div>
);

export const FullWidthImg = styled.img`
	width: 100%;
	height: auto;
`;

const IconWrapper = styled.i`
	font-size: ${ p => p.size || "1em" };
	margin-right: ${ p => p.marginRight || 0 };
`;

export const Icon = props => (
	<IconWrapper
		className = { `fa fa-${ props.type.replace("_", "-") }` }
		{ ...props }
	/>
);

export const ButtonWrapper = styled.div`
	display: inline-block;
	padding: 0 1em;
	line-height: 1;
	height: 2.6em;
	transition: 0.1s linear background;
	cursor: pointer;
	${ p => (p.margin ? "margin: 0.3em;" : "") } display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&:hover,
	&:visited,
	&:active {
		color: ${ p => p.color || vars.colors.text };
	}

	${ ({ outline, color, hoverColor, }) =>
		outline || true
			? css`
					color: ${ color || vars.colors.text };
					border: 1.5px solid ${ color || vars.colors.text };
					${ mixins.xs`border-width: 1px;` } background: transparent;

					&:hover,
					&:visited,
					&:active {
						color: ${ color || vars.colors.text };
					}
			  `
			: `
				color: white;
				background: ${ color || vars.colors.text };

				&:hover,
				&:visited,
				&:active {
					color: white;
				}

				&:hover {
					background: ${ hoverColor ||
						(color
							? mixins.darken(color, 0.1)
							: mixins.lighten(vars.colors.text, 0.1)) };
				}

			` };
`;

const IconSpan = styled.span`
	display: inline-block;
`;

const MaybeLink = props =>
	props.to ? (
		<Link to = { props.to } children = { props.children } />
	) : (
		<a href = { props.href } children = { props.children } target = { props.target } />
	);

export const IconButton = props => {
	return (
		<MaybeLink { ...props }>
			<ButtonWrapper { ...props }>
				{props.icon ? (
					<Icon type = { props.icon } size = "1.2em" marginRight = "0.4em" />
				) : null}

				<IconSpan>{props.text || props.children}</IconSpan>
			</ButtonWrapper>
		</MaybeLink>
	);
};

export const Button = IconButton;

export const PSpacing = styled.div`
	${ mixins.bpEach("height", vars.font.size) };
`;

export const Only = objMap(vars.bps, (key, val) => ({ children, }) => (
	<MQ
		query = { `(min-width: ${ val.min }px) and (max-width: ${ val.max }px)` }
		children = { children }
	/>
));

export const FunkyButton = styled.div`
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
	` };
	${ mixins.bp.md.min`
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
