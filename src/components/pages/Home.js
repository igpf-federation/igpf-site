import styled from "styled-components";
import { Link, } from "react-router-dom";

import {
	Container,
	GridCell,
	TextCell,
} from "src/components/common";

import * as mixins from "codogo-utility-functions";

import Banner from "src/components/common/Banner";

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
			<Banner/>

			<HomeContainer>
				<Article>
					<TextCell>
						here
					</TextCell>

					<TextCell>
						yes
					</TextCell>
				</Article>

				<Sidebar>
					<SidebarInner>
						<GridCell>
							<p>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
							
							<p>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
							
							<p>Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
						</GridCell>
					</SidebarInner>
				</Sidebar>
			</HomeContainer>
		</div>
	);
};

export default Home;
