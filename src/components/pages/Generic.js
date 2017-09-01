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

// const SidebarImage = styled.img`
// 	width: 100%;
// 	height: auto;
// `;

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

const Generic = props => {
	console.log("generic props", props);

	const {
		subsection,
		slug,
		parent,
	} = props;

	const { title, html, image: { url: imageUrl, }, people, } = allSectionsMap[slug];

	// sidebar
	const sectionSlug = subsection ? parent : slug;
	const subsectionSlugs = sectionsMap[sectionSlug].subsections;
	const sectionLink = {
		to: `/${sectionSlug}`,
		title: sectionsMap[sectionSlug].title,
		slug: sectionSlug,
	};
	const subsectionLinks = subsectionSlugs.map(subsectionSlug => ({
		to: `/${sectionSlug}/${subsectionSlug}`,
		title: subsectionsMap[subsectionSlug].title,
		slug: subsectionSlug,
	}))

	return (
		<Container1>
			<Sidebar>
				<SidebarInner>
					{
						imageUrl || true
						? <SidebarImage src = { imageUrl }/>
						: null
					}
					<GridCell>
						<TextCell>
							<Link to = { sectionLink.to }>
								<h3>{ sectionLink.title }</h3>
							</Link>

							{
								subsectionLinks.map(subsectionLink => (
									<Link to = { subsectionLink.to } key = { subsectionLink.slug }>
										<p>{ subsectionLink.title }</p>
									</Link>
								))
							}
						</TextCell>
					</GridCell>
				</SidebarInner>
			</Sidebar>

			<FakeSidebar/>

			<Article>
				<TextCell>
					<h1>{ title }</h1>

					<div dangerouslySetInnerHTML = {{
						__html: html,
					}}/>
				</TextCell>

				{
					people
					? <PeopleWrapper>
						{
							people.map( person => (
								<PersonWrapper>
									<PersonPicture src = { 
										person.picture.url
									 	? person.picture.url
									 	: "/img/profile-pic.png"
									 }/>
									
									<h3>{ person.name }</h3>

									<p><strong>{ person.role }</strong></p>

									<p>{ person.email }</p>
								</PersonWrapper>
							))
						}
					</PeopleWrapper>
					: null
				}
			</Article>
		</Container1>
	);	
};

export default Generic;