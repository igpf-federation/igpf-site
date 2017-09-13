import styled from "styled-components";
import { Link, } from "react-router-dom";

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
import {
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	allSectionsMap,
} from "src/data";

// --------------------------------------------------

const sidebarWidth = 36;

const Container1 = styled(Container)`
	display: flex;
	flex-direction: row;
`;

const Sidebar = styled(GridCell)`
	width: ${sidebarWidth}%;
`;

const FakeSidebar = styled.div`
	width: ${sidebarWidth}%;
	display: none;
`;

const SidebarInner = styled.div`
	background-color: #eee;
`;

const SidebarImage = styled.div`
	padding-top: 75%;
	background-color: #bbb;
	background-image: url(${R.prop("src")});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const Article = styled(GridCell)`
	width: 100%;
`;

// --------------------------------------------------

const Home = props => {
	const {
		subsection,
		slug,
		parent,
	} = props;

	return (
		<Container1>
			<Article>
				<TextCell>
					<h2>The Islington GP Federation</h2>

					<h1>Improving healthcare across North London</h1>
				</TextCell>

				<TextCell>
					<div>A nice visual introduction would go here...</div>
				</TextCell>

				<TextCell>
					<Link to = "/who-we-are">
						<h3>Who We Are</h3>
					</Link>

					<div>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.</div>

					<br/>

					<Link to = "/who-we-are">
						<div>Find out more</div>
					</Link>
				</TextCell>

				<TextCell>
					<Link to = "/what-we-do">
						<h3>What We Do</h3>
					</Link>

					<div>Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.</div>

					<br/>

					<Link to = "/what-we-do">
						<div>Find out more</div>
					</Link>
				</TextCell>
			</Article>
		</Container1>
	);	
};

export default Home;