import styled from "styled-components";
import { Link, } from "react-router-dom";

import {
	Container,
	GridCell,
	TextCell,
} from "src/components/common";

import Banner from "src/components/common/Banner";

// --------------------------------------------------

const HomeContainer = styled(Container)`
	display: flex;
	flex-direction: row;
`;

const Article = styled(GridCell)`
	width: 100%;
`;

// --------------------------------------------------

const Home = () => {
	return (
		<div>
			<Banner/>

			<HomeContainer>
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

						<div>
							Curabitur blandit tempus porttitor. Aenean eu leo quam.
							Pellentesque ornare sem lacinia quam venenatis
							vestibulum. Donec sed odio dui. Donec ullamcorper nulla
							non metus auctor fringilla. Nullam id dolor id nibh
							ultricies vehicula ut id elit. Vestibulum id ligula
							porta felis euismod semper. Maecenas faucibus mollis
							interdum.
						</div>

						<br />

						<Link to = "/who-we-are">
							<div>Find out more</div>
						</Link>
					</TextCell>

					<TextCell>
						<Link to = "/what-we-do">
							<h3>What We Do</h3>
						</Link>

						<div>
							Curabitur blandit tempus porttitor. Aenean eu leo quam.
							Pellentesque ornare sem lacinia quam venenatis
							vestibulum. Donec sed odio dui. Donec ullamcorper nulla
							non metus auctor fringilla. Nullam id dolor id nibh
							ultricies vehicula ut id elit. Vestibulum id ligula
							porta felis euismod semper. Maecenas faucibus mollis
							interdum.
						</div>

						<br />

						<Link to = "/what-we-do">
							<div>Find out more</div>
						</Link>
					</TextCell>
				</Article>
			</HomeContainer>
		</div>
	);
};

export default Home;
