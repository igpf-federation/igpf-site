import React, { Component, } from "react";
import { Carousel, } from "react-responsive-carousel";
import { siteSettings, } from "src/data";

import styled from "styled-components";

// --------------------------------

const carouselSettings = {
	interval: 5000,
	howArrows: true,
	showThumbs: false,
};

class DemoCarousel extends Component {
	render() {
		return (
			<Carousel 
				autoPlay 
				interval = { carouselSettings.interval }
				howArrows = { carouselSettings.howArrows } 
				showThumbs = { carouselSettings.showThumbs }
			>
				{
					siteSettings.carousel.map(item => (
						<div>
							<img
								src = { `https://res.cloudinary.com/codogo/image/fetch/h_750,w_1800,c_fill,g_face,f_auto/https:${ item.fields.file.url }` }
								alt = { item.fields.description }
							/>

							{ item.fields.description && <p className = "legend">{ item.fields.description }</p> }
						</div>
					))
				}
			</Carousel>
		);
	}
}

// --------------------------------

const BannerWrapper = styled.div`
	background: #f6f6f6;
	position: relative;
	width: 100%;
`;

// --------------------------------

const Banner = () => (
	<BannerWrapper>
		<DemoCarousel />
	</BannerWrapper>
);

export default Banner;
