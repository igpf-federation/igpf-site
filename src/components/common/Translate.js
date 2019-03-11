import styled from "styled-components";

import * as vars from "../../styles/vars";
import React from 'react';
import * as mixins from "codogo-utility-functions";

// --------------------------------------------------

const TranslateButton = styled.div`
	background-color: ${ vars.colors.primary };
	border-radius: 3px;
	border-top: 2px solid transparent;
	border: 0;
	bottom: 1em;
	color: white;
	font-size: 1.2em;
	height: auto;
	padding: 0.5em 1em;
	position: fixed;
	right: 1em;
	z-index: 99;

	${ mixins.bp.sm.max`display: none;` };

	:hover {
		opacity: 0.5;
	}

	& > div {
		${ mixins.contained() };
		overflow: hidden;
		opacity: 0;
	}
`;

// --------------------------------------------------

const Translate = () => (
	<TranslateButton>
		Translate

		<div id = "google_translate_element" />
	</TranslateButton>
);

export default Translate;
