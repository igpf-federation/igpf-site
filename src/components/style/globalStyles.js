import React from "react";
import { injectGlobal, } from "styled-components";

import * as vars from "./vars";
import * as mixins from "codogo-utility-functions";

// --------------------------------------------------

export default () => injectGlobal`
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
	}

	html.noScroll {
		${ mixins.bp.md.min`
			margin-right: ${ vars.dim.scrollbar };
			background-color: ${ vars.scrollbar.color.track };
		` }		
	}

	body {
		background: white;
		font-family: Frutiger, Archivo, sans-serif;
		${ mixins.bpEach("font-size", vars.font.size) }
		color: ${ vars.colors.text };
		margin: 0;
		${ mixins.bpEither("margin-bottom", vars.dim.footer.height) }
		overflow-y: scroll;
		line-height: 1.5;
	}

	body.noScroll {
		overflow-y: hidden;
	}

	a,
	a:hover,
	a:visited,
	a:active {
		text-decoration: none;
		color: ${ vars.colors.text };
	}

	a.white-link,
	a.white-link:hover,
	a.white-link:visited,
	a.white-link:active {
		color: white;
	}

	p, h1, h2, h3, h4 {
		${ mixins.bpEach("margin", mixins.objectMap(vars.font.size, (key, val) => `0 0 ${ val } 0`)) }
	}

	img {
		vertical-align: bottom;
	}

	// ::-webkit-scrollbar-track {
	// 	background-color: ${ vars.scrollbar.color.track };
	// }

	// ::-webkit-scrollbar	{
	// 	width: ${ vars.dim.scrollbar };
	// 	height: ${ vars.dim.scrollbar };
	// 	background-color: #F5F5F5;
	// }

	// ::-webkit-scrollbar-thumb {
	// 	border-radius: 10px;
	// 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	// 	background-color: ${ vars.scrollbar.color.thumb };
	// }

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
`;
