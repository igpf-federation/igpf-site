import { ThemeProvider, } from "styled-components";
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom";
import Helmet from "react-helmet";

import routesConfig from "./routesConfig";
import injectGlobalStyles from "./components/style/globalStyles";

import Nav from "./components/common/Nav";
import Main from "./components/common/Main";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import * as vars from "./components/style/vars";

// --------------------------------------------------

injectGlobalStyles();

const defaultColors = {
	...vars.colors,
};

const routes = routesConfig.map(({ component: Comp, colors, ...rest }) => {
	const render = props => (
		<ThemeProvider theme = { { ...defaultColors, ...colors, } }>
			<div>
				<Helmet>
					<meta charSet = "utf-8" />

					<title>Muswell Press</title>
					
					<link rel = "canonical" href = "http://http://www.muswell-press.co.uk/" />
				</Helmet>

				<Nav key = "Nav" />

				<Main key = "Main">
					<Comp { ...props } />
				</Main>
				
				<Footer key = "Footer" />
			</div>
		</ThemeProvider>
	)

	return <Route
		key = { rest.path }
		{ ...rest }
		render = { render }
	/>
});

export default () =>
	<Router>
		<ScrollToTop>
			<div>
				{ routes }
			</div>
		</ScrollToTop>
	</Router>;
