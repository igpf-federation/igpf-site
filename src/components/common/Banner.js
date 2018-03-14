import styled from "styled-components";

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
		<BannerBackground src = "/img/islington-map.jpeg" alt = "Map of Islington"/>
	</BannerWrapper>
)

export default Banner;