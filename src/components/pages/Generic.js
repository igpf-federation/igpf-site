import styled from "styled-components";

import {
	Container,
	GridCell,
	TextCell,
	FullWidthImg,
	Para,
	Button,
	PSpacing,
} from "../common";

import * as vars from "../style/vars";
import * as mixins from "../style/mixins";
import { objMap, randomInt, } from "../../lib/util";

// --------------------------------------------------

const Container1 = styled(Container)`
	display: flex;
	flex-direction: row;
`;

const Sidebar = styled(GridCell)`
	width: 36%;
`;

const SidebarInner = styled.div`
	background-color: #eee;
`;

const SidebarImage = styled.div`
	padding-top: 75%;
	background-color: blue;
	background-image: url(${R.prop("src")});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const Article = styled(GridCell)`
	flex: 1;
`;

// --------------------------------------------------

const Generic = props => (
	<Container1>
		<Sidebar>
			<SidebarInner>
				<SidebarImage src = { `https://source.unsplash.com/random/${randomInt()}` }/>
				<GridCell>
					<TextCell>
						<p>sddfdfdf</p>
						<p>dfdfdf</p>
					</TextCell>
				</GridCell>
			</SidebarInner>
		</Sidebar>
		<Article>
			<TextCell>
				<h1>sdfdfdf</h1>
				<p>sdffdff</p>
				<h2>sdfjdfkjdf</h2>
				<p>sdfdfdffdf</p>
				<p>esgfd  agd d f</p>
			</TextCell>
		</Article>
	</Container1>
);

export default Generic;