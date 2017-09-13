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
	width: ${100 - sidebarWidth}%;
`;

const PeopleWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const PersonWrapper = styled(GridCell)`
	width: ${100 / 3}%;
`;

const PersonPicture = styled.div`
	padding-top: 150%;
	background-color: #bbb;
	background-image: url(${R.prop("src")});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
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
					<h1>Home</h1>
				</TextCell>
			</Article>
		</Container1>
	);	
};

export default Home;