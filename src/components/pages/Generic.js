import styled from "styled-components";
import { Link, } from "react-router-dom";

import {
	Container,
	GridCell,
	TextCell,
} from "../common";

import * as mixins from "codogo-utility-functions";

import {
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	servicesList,
	servicesMap,
	jobsList,
	jobsMap,
	allSectionsMap,
	allSectionsList,
} from "src/data";

console.log({
	sectionsList,
	sectionsMap,
	subsectionsList,
	subsectionsMap,
	servicesList,
	servicesMap,
	jobsList,
	jobsMap,
	allSectionsMap,
	allSectionsList,
});

// --------------------------------------------------

const GenericContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	${ mixins.xs`flex-direction: column;` };
`;

const Sidebar = styled(GridCell)`
	flex: 1;
	${ mixins.xs`flex: 2` };
`;

const FakeSidebar = styled.div`
	flex: 1;
	${ mixins.xs`flex: 2` };
	display: none;
`;

const SidebarInner = styled.div`
	background-color: #eee;
`;

const SidebarImage = styled.div`
	padding-top: 75%;
	background-color: #bbb;
	background-image: url(${ R.prop("src") });
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const Article = styled(GridCell)`
	flex: 2;
`;

const PeopleWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const PersonWrapper = styled(GridCell)`
	width: ${ 100 / 4 }%;
`;

const PersonPicture = styled.div`
	padding-top: 150%;
	background-color: #bbb;
	background-image: url(${ R.prop("src") });
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

// --------------------------------------------------

const Generic = props => {
	const { subsection, service, job, slug, parent, } = props;

	const { title, html, image: { url: imageUrl, }, people, } = allSectionsMap[
		slug
	];

	// sidebar
	const sectionSlug = subsection || service || job ? parent : slug;

	const subsectionSlugs = sectionsMap[sectionSlug]
		? sectionsMap[sectionSlug].subsections
		: [];
	const serviceSlugs = sectionsMap[sectionSlug]
		? sectionsMap[sectionSlug].services
		: [];
	const jobSlugs = sectionsMap[sectionSlug]
		? sectionsMap[sectionSlug].jobs
		: [];

	const sectionLink = {
		to: `/${ sectionSlug }`,
		title: sectionsMap[sectionSlug].title,
		slug: sectionSlug,
	};

	const subsectionLinks = subsectionSlugs.map(
		subsectionSlug => (
			console.log("Slug", subsectionSlug),
			{
				to: `/${ sectionSlug }/${ subsectionSlug }`,
				title: subsectionsMap[subsectionSlug].title,
				slug: subsectionSlug,
			}
		),
	);

	const serviceLinks = serviceSlugs.map(serviceSlug => ({
		to: `/services/${ serviceSlug }`,
		title: servicesMap[serviceSlug].title,
		slug: serviceSlug,
	}));

	const jobLinks = jobSlugs.map(jobSlug => ({
		to: `/jobs/${ jobSlug }`,
		title: jobsMap[jobSlug].title,
		slug: jobSlug,
	}));

	return (
		<GenericContainer>
			<Sidebar>
				<SidebarInner>
					{
						imageUrl || true ? 
							<SidebarImage src = { `http://res.cloudinary.com/codogo/image/fetch/h_500,c_fill,g_face,f_auto/https:${ imageUrl }` } /> :
							null
					}

					<GridCell>
						<TextCell>
							<Link to = { sectionLink.to }>
								<h3>{sectionLink.title}</h3>
							</Link>

							{
								subsectionLinks.map(subsectionLink => (
									<Link
										to = { subsectionLink.to }
										key = { subsectionLink.slug }
									>
										<p>{subsectionLink.title}</p>
									</Link>
								))
							}

							{serviceLinks.length > 0 ? (
								<div>
									<h4>Services</h4>

									{serviceLinks.map(serviceLink => (
										<Link
											to = { serviceLink.to }
											key = { serviceLink.slug }
										>
											<p>{serviceLink.title}</p>
										</Link>
									))}
								</div>
							) : null}

							{jobLinks.length > 0 ? (
								<div>
									<h4>Jobs</h4>

									{jobLinks.map(jobLink => (
										<Link
											to = { jobLink.to }
											key = { jobLink.slug }
										>
											<p>{jobLink.title}</p>
										</Link>
									))}
								</div>
							) : null}
						</TextCell>
					</GridCell>
				</SidebarInner>
			</Sidebar>

			<FakeSidebar />

			<Article>
				<TextCell>
					<h1>{title}</h1>

					<div
						dangerouslySetInnerHTML = { {
							__html: html,
						} }
					/>
				</TextCell>

				{people ? (
					<PeopleWrapper>
						{people.map(person => (
							<PersonWrapper>
								<PersonPicture
									src = {
										person.picture.url
											? person.picture.url
											: "/img/profile-pic.png"
									}
								/>

								<h3>{person.name}</h3>

								<p>
									<strong>{person.role}</strong>
								</p>

								<p>{person.email}</p>
							</PersonWrapper>
						))}
					</PeopleWrapper>
				) : null}
			</Article>
		</GenericContainer>
	);
};

export default Generic;
