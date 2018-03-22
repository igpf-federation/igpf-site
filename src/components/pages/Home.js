import styled from "styled-components";

import {
	Container,
	GridCell,
	TextCell,
} from "src/components/common";

import Translate from "src/components/common/Translate";

import * as mixins from "codogo-utility-functions";

import Banner from "src/components/common/Banner";

import {
	siteSettings,
} from "src/data";

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

			<Banner/>

			<HomeContainer>
				<Article>
					<TextCell>
						<div dangerouslySetInnerHTML = { { __html: siteSettings.homepageContentHTML, } } />
					</TextCell>
				</Article>

				<Sidebar>
					<SidebarInner>
						<GridCell>
							<div dangerouslySetInnerHTML = { { __html: siteSettings.homepageSidebarHTML, } } />
						</GridCell>
					</SidebarInner>
				</Sidebar>
			</HomeContainer>
		</div>
	);
};

export default Home;
