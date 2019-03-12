import * as mixins from 'codogo-utility-functions';
import * as vars from './vars';

// todo: Import this properly
//import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// --------------------------------------------------

const globalStyles = `
	@import url('https://fonts.googleapis.com/css?family=Fredoka+One');
	@import url('https://fonts.googleapis.com/css?family=Raleway:400,600');
	@import url('https://fonts.googleapis.com/css?family=IM+Fell+English:400i');
	@import url('https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i');
	@import url('https://fonts.googleapis.com/css?family=Archivo:400,600');
	@import url('https://fonts.googleapis.com/css?family=Montserrat');

	@font-face {
	  font-family: 'Frutiger';
	  font-style: normal;
	  font-weight: 400;
	  src: url("/fonts/frutiger/frutiger-roman-webfont.eot");
	  src: url("/fonts/frutiger/frutiger-roman-webfont.woff") format("woff"), url("../fonts/frutiger/frutiger-roman-webfont.ttf") format("truetype"); }
	@font-face {
	  font-family: 'Frutiger';
	  font-style: normal;
	  font-weight: 700;
	  src: url("/fonts/frutiger/frutiger-bold-webfont.eot");
	  src: url("/fonts/frutiger/frutiger-bold-webfont.woff") format("woff"), url("../fonts/frutiger/frutiger-bold-webfont.ttf") format("truetype"); }
	@font-face {
	  font-family: 'Frutiger';
	  font-style: normal;
	  font-weight: 200;
	  src: url("/fonts/frutiger/frutiger-light-webfont.eot");
	  src: url("/fonts/frutiger/frutiger-light-webfont.woff") format("woff"), url("../fonts/frutiger/frutiger-light-webfont.ttf") format("truetype"); }
	@font-face {
	  font-family: 'Frutiger';
	  font-style: normal;
	  font-weight: 800;
	  src: url("/fonts/frutiger/frutiger-black-webfont.eot");
	  src: url("/fonts/frutiger/frutiger-black-webfont.woff") format("woff"), url("../fonts/frutiger/frutiger-black-webfont.ttf") format("truetype"); }

	@font-face {
	  font-family: 'TradeGothic';
	  font-style: normal;
	  font-weight: 700;
	  src: url(/fonts/TradeGothic-Bold.woff) format('woff');
	}

	*, *:before, *:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		min-height: 100%;
		position: relative;
    
    &.noScroll {
  		${mixins.bp.md.min`
  			margin-right: ${vars.dim.scrollbar};
  			background-color: ${vars.scrollbar.color.track};
  		`}		
  	}
  }

	body {
		background: white;
		font-family: Frutiger, Archivo, sans-serif;
		color: ${vars.colors.text};
		margin: 0;
		overflow-y: scroll;
		line-height: 1.5;

    ${mixins.bpEither('margin-bottom', vars.dim.footer.height)}
    ${mixins.bpEach('font-size', vars.font.size)}

    &.noScroll {
		  overflow-y: hidden;
    }
	}

  a {
  	&,
  	&:hover,
  	&:visited,
  	&:active {
  		text-decoration: none;
  		color: ${vars.colors.text};
  	}

  	&.white-link {
      &,
    	&:hover,
    	&:visited,
    	&:active {
    		color: white;
    	}
    }
  }

  p ,
  ul > li,
  ol > li {
    a {
      &,
      &:hover,
      &:visited,
      &:active {
        text-decoration: underline;
        color: ${vars.colors.link};
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

	p, h1, h2, h3, h4 {
		${mixins.bpEach(
      'margin',
      mixins.objectMap(vars.font.size, (key, val) => `0 0 ${val} 0`),
    )};
	}

  ul,
  ol {
    > li {
      margin-left: 1em;
    }
  }

	img {
		vertical-align: bottom;
	}

	.fade-enter {
	  opacity: 0;
	  z-index: 1;
	}

	.fade-enter.fade-enter-active {
	  opacity: 1;
	  transition: opacity 250ms ease-in;
	}

	// --- overwriting google translate widget stupid styles

	.goog-te-banner-frame {
		top: auto !important;
		bottom: 0px !important;
	}

	html {
		height: auto !important;
	}

	body {
		top: 0 !important;
		position: static !important;
	}
 
  /******************************************** BREAKPOINT WIDTHS ********************************************/
  /******************************************** FONTS ********************************************/
  /******************************************** COLOURS ********************************************/
   .carousel .control-arrow, 
   .carousel.carousel-slider .control-arrow {
       -webkit-transition: all 0.25s ease-in;
       -moz-transition: all 0.25s ease-in;
       -ms-transition: all 0.25s ease-in;
       -o-transition: all 0.25s ease-in;
       transition: all 0.25s ease-in;
       opacity: 0.4;
       filter: alpha(opacity=40);
       position: absolute;
       z-index: 2;
       top: 20px;
       background: none;
       border: 0;
       font-size: 32px;
       cursor: pointer;
  }
   .carousel .control-arrow:hover {
       opacity: 1;
       filter: alpha(opacity=100);
  }
   .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
       margin: 0 5px;
       display: inline-block;
       border-top: 8px solid transparent;
       border-bottom: 8px solid transparent;
       content: '';
  }
   .carousel .control-disabled.control-arrow {
       opacity: 0;
       filter: alpha(opacity=0);
       cursor: inherit;
       display: none;
  }
   .carousel .control-prev.control-arrow {
       left: 0;
  }
   .carousel .control-prev.control-arrow:before {
       border-right: 8px solid #fff;
  }
   .carousel .control-next.control-arrow {
       right: 0;
  }
   .carousel .control-next.control-arrow:before {
       border-left: 8px solid #fff;
  }
   .carousel {
       position: relative;
       width: 100%;
  }
   .carousel * {
       -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
       box-sizing: border-box;
  }
   .carousel button {
       outline: 0;
       border: 0;
       background: none;
  }
   .carousel img {
       width: 100%;
       display: inline-block;
       pointer-events: none;
  }
   .carousel .carousel {
       position: relative;
  }
   .carousel .control-arrow {
       top: 50%;
       margin-top: -13px;
       font-size: 18px;
  }
   .carousel .thumbs-wrapper {
       margin: 20px;
       overflow: hidden;
  }
   .carousel .thumbs {
       -webkit-transition: all 0.15s ease-in;
       -moz-transition: all 0.15s ease-in;
       -ms-transition: all 0.15s ease-in;
       -o-transition: all 0.15s ease-in;
       transition: all 0.15s ease-in;
       -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
       -ms-transform: translate3d(0, 0, 0);
       -o-transform: translate3d(0, 0, 0);
       transform: translate3d(0, 0, 0);
       position: relative;
       list-style: none;
       white-space: nowrap;
  }
   .carousel .thumb {
       -webkit-transition: border 0.15s ease-in;
       -moz-transition: border 0.15s ease-in;
       -ms-transition: border 0.15s ease-in;
       -o-transition: border 0.15s ease-in;
       transition: border 0.15s ease-in;
       display: inline-block;
       width: 80px;
       margin-right: 6px;
       white-space: nowrap;
       overflow: hidden;
       border: 3px solid #fff;
       padding: 2px;
  }
   .carousel .thumb.selected, .carousel .thumb:hover {
       border: 3px solid #333;
       padding: 2px;
  }
   .carousel .thumb img {
       vertical-align: top;
  }
   .carousel.carousel-slider {
       position: relative;
       margin: 0;
       overflow: hidden;
  }
   .carousel.carousel-slider .control-arrow {
       top: 0;
       color: #fff;
       font-size: 26px;
       bottom: 0;
       margin-top: 0;
       padding: 5px;
  }
   .carousel.carousel-slider .control-arrow:hover {
       background: rgba(0, 0, 0, 0.2);
  }
   .carousel .slider-wrapper {
       overflow: hidden;
       margin: auto;
       width: 100%;
       -webkit-transition: height 0.15s ease-in;
       -moz-transition: height 0.15s ease-in;
       -ms-transition: height 0.15s ease-in;
       -o-transition: height 0.15s ease-in;
       transition: height 0.15s ease-in;
  }
   .carousel .slider-wrapper.axis-horizontal .slider {
       -ms-box-orient: horizontal;
       display: -webkit-box;
       display: -moz-box;
       display: -ms-flexbox;
       display: -moz-flex;
       display: -webkit-flex;
       display: flex;
  }
   .carousel .slider-wrapper.axis-horizontal .slider .slide {
       flex-direction: column;
       flex-flow: column;
  }
   .carousel .slider-wrapper.axis-vertical {
       -ms-box-orient: horizontal;
       display: -webkit-box;
       display: -moz-box;
       display: -ms-flexbox;
       display: -moz-flex;
       display: -webkit-flex;
       display: flex;
  }
   .carousel .slider-wrapper.axis-vertical .slider {
       -webkit-flex-direction: column;
       flex-direction: column;
  }
   .carousel .slider {
       margin: 0;
       padding: 0;
       position: relative;
       list-style: none;
       width: 100%;
  }
   .carousel .slider.animated {
       -webkit-transition: all 0.35s ease-in-out;
       -moz-transition: all 0.35s ease-in-out;
       -ms-transition: all 0.35s ease-in-out;
       -o-transition: all 0.35s ease-in-out;
       transition: all 0.35s ease-in-out;
  }
   .carousel .slide {
       min-width: 100%;
       margin: 0;
       position: relative;
       text-align: center;
       background: #000;
  }
   .carousel .slide img {
       width: 100%;
       vertical-align: top;
       border: 0;
  }
   .carousel .slide iframe {
       display: inline-block;
       width: calc(100% - 80px);
       margin: 0 40px 40px;
       border: 0;
  }
   .carousel .slide .legend {
       -webkit-transition: all 0.5s ease-in-out;
       -moz-transition: all 0.5s ease-in-out;
       -ms-transition: all 0.5s ease-in-out;
       -o-transition: all 0.5s ease-in-out;
       transition: all 0.5s ease-in-out;
       position: absolute;
       bottom: 40px;
       left: 50%;
       margin-left: -45%;
       width: 90%;
       border-radius: 10px;
       background: #000;
       color: #fff;
       padding: 10px;
       font-size: 12px;
       text-align: center;
       opacity: 0.25;
       -webkit-transition: opacity 0.35s ease-in-out;
       -moz-transition: opacity 0.35s ease-in-out;
       -ms-transition: opacity 0.35s ease-in-out;
       -o-transition: opacity 0.35s ease-in-out;
       transition: opacity 0.35s ease-in-out;
  }
   .carousel .control-dots {
       position: absolute;
       bottom: 0;
       margin: 10px 0;
       text-align: center;
       width: 100%;
  }
   @media (min-width: 960px) {
       .carousel .control-dots {
           bottom: 0;
      }
  }
   .carousel .control-dots .dot {
       -webkit-transition: opacity 0.25s ease-in;
       -moz-transition: opacity 0.25s ease-in;
       -ms-transition: opacity 0.25s ease-in;
       -o-transition: opacity 0.25s ease-in;
       transition: opacity 0.25s ease-in;
       opacity: 0.3;
       filter: alpha(opacity=30);
       box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
       background: #fff;
       border-radius: 50%;
       width: 8px;
       height: 8px;
       cursor: pointer;
       display: inline-block;
       margin: 0 8px;
  }
   .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
       opacity: 1;
       filter: alpha(opacity=100);
  }
   .carousel .carousel-status {
       position: absolute;
       top: 0;
       right: 0;
       padding: 5px;
       font-size: 10px;
       text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
       color: #fff;
  }
   .carousel:hover .slide .legend {
       opacity: 1;
  }
`;

export default globalStyles;
