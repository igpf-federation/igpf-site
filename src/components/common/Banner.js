import styled from "styled-components";

import { contained, } from "codogo-utility-functions";

// --------------------------------

const BannerWrapper = styled.div`
	height: 50vh;
	width: 100%;
	position: relative;
	background: #f6f6f6;
`;

const BannerBackground = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const BannerContent = styled.div`
	${ contained() };
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 75%;
	margin: auto;
`;

// --------------------------------

const Banner = () => (
	<BannerWrapper>
		<BannerContent>
			Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
		</BannerContent>

		<BannerBackground src = "/img/islington-map.jpeg" alt = "Map of Islington"/>
	</BannerWrapper>
)

export default Banner;