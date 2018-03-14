import React from "react";
import styled from "styled-components";
import { Link, } from "react-router-dom";

import * as mixins from "../../style/mixins";
import * as vars from "../../style/vars";
import { nav, } from "../../../data";

import Links from "./Links";
import Burger from "./Burger";
import Fade from "../Fade";

// --------------------------------------------------

const Wrapper = styled.nav`
	${ mixins.bp.sm.min`${ mixins.shadow(1) }` };
	${ mixins.bpEither("height", vars.dim.nav.height) };
	background-color: ${ R.path([ "theme", "nav", ]) };
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 2;
	color: white;
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

const MobileStuff = styled.div`
	${ mixins.bp.md.min`display: none;` };
	${ mixins.contained() };
`;

const Dark = styled.div`
	${ mixins.contained() };
	position: fixed;
	background: ${ mixins.tr(0.5) };
`;

const Overlay = styled.div`
	${ mixins.contained() };
	${ ({ open, }) =>
		open ? mixins.shadow(1) : "" };
	transition: 0.3s all ease-out;
	background-color: ${ R.path([ "theme", "nav", ]) };
`;

const BurgerWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	margin-top: -20px;
`;

const LogoImage = styled.img`
	height: 80%;
	width: auto;
`;

const Logo = props => (
	<LogoWrapper to = "/">
		<LogoImage src = "/img/igpf-logo.png" />
	</LogoWrapper>
);

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	position: absolute;
	top: 0;
	bottom: 0;
	${ mixins.bpEither("left", vars.dim.nav.margin) } display: flex;
	flex-direction: row;
	align-items: center;
`;

// --------------------------------------------------

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		return (
			<Wrapper>
				<Inner>
					<MobileStuff>
						<Fade visible = { this.state.open }>
							<Dark
								onClick = { () =>
									this.setState({
										open: false,
									})
								}
							/>
						</Fade>
					</MobileStuff>

					<Links
						links = { nav }
						close = { () =>
							this.setState({
								open: false,
							})
						}
						{ ...this.state }
					/>

					<MobileStuff>
						<Overlay { ...this.state } />

						<BurgerWrapper
							onClick = { () =>
								this.setState({
									open: !this.state.open,
								})
							}
						>
							<Burger
								{ ...this.state }
								padding = { mixins.num(vars.dim.nav.margin.xs) }
							/>
						</BurgerWrapper>
					</MobileStuff>

					<Logo />
				</Inner>
			</Wrapper>
		);
	}
}
