import React, { Component, } from "react";
import { Carousel, } from "react-responsive-carousel";

import styled from "styled-components";

import { siteSettings, } from "src/data";

// --------------------------------

class DemoCarousel extends Component {
	render() {
		return (
			<Carousel autoPlay howArrows = { true } showThumbs = { false }>
				{siteSettings.carousel.map(item => (
					<div>
						<img
							src = { `https://res.cloudinary.com/codogo/image/fetch/h_750,w_1800,c_fill,g_face,f_auto/https:${ item.fields.file.url }` }
							alt = { item.fields.description }
						/>

						{ item.fields.description && <p className = "legend">{item.fields.description}</p> }
					</div>
				))}
			</Carousel>
		);
	}
}

// --------------------------------

const BannerWrapper = styled.div`
	width: 100%;
	position: relative;
	background: #f6f6f6;
`;

// --------------------------------

const Banner = () => (
	<BannerWrapper>
		<DemoCarousel />
	</BannerWrapper>
);

export default Banner;
