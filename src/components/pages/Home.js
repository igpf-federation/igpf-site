import React from 'react';
import { Container, GridCell, TextCell, } from "../../components/common";
import * as mixins from "codogo-utility-functions";
import { siteSettings, } from "../../data";

import Banner from "../../components/common/Banner";
import styled from "styled-components";
import Translate from "../../components/common/Translate";

// --------------------------------------------------

const Sidebar = styled(GridCell)`
	flex: 1;
	${ mixins.xs`flex: 2` };
`;

const SidebarInner = styled.div`
	background-color: #eee;
`;

const HomeContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	${ mixins.xs`flex-direction: column` };
`;

const Article = styled(GridCell)`
	flex: 2;
`;

// --------------------------------------------------

const Home = () => {
	return (
		<div>
			<Translate />

			{ siteSettings.carousel && <Banner /> }

			<HomeContainer>
				<Article>
					<TextCell>
						<div
							dangerouslySetInnerHTML = { {
								__html: siteSettings.homepageContentHTML,
							} }
						/>
					</TextCell>
				</Article>

				<Sidebar>
					<SidebarInner>
						<GridCell>
							<div
								dangerouslySetInnerHTML = { {
									__html: siteSettings.homepageSidebarHTML,
								} }
							/>
						</GridCell>
					</SidebarInner>
				</Sidebar>
			</HomeContainer>
		</div>
	);
};

export default Home;
