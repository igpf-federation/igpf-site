import styled from "styled-components";

import * as vars from "src/components/style/vars";

import * as mixins from "codogo-utility-functions";

// --------------------------------------------------

const TranslateButton = styled.div`
	height: auto;
	border: 0;
	border-top: 2px solid transparent;
	position: relative;
	font-size: 1.2em;
	background-color: ${ vars.colors.primary };
	color: white;
	padding: 0.5em 1em;
	border-radius: 3px;

	:hover {
		opacity: 0.5;
	}

	position: fixed;
	right: 1em;
	bottom: 1em;
	z-index: 99;

	${ mixins.bp.sm.max`display: none;` };

	& > div {
		${ mixins.contained() };
		overflow: hidden;
		opacity: 0;
	}
`;

// --------------------------------------------------

const Translate = () => (
	<TranslateButton notLink>
		Translate
		<div id = "google_translate_element" />
	</TranslateButton>
);

export default Translate;
