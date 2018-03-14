import styled from "styled-components";

import IslingtonMap from "src/components/images/islington-map.jpeg";

// --------------------------------

const BannerWrapper = styled.div`
	height: 50vh;
	width: 100%;
`;

const BannerBackground = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

// --------------------------------

const Banner = () => (
	<BannerWrapper>
		<BannerBackground src = { IslingtonMap } alt = "Map of Islington"/>
	</BannerWrapper>
)

export default Banner;