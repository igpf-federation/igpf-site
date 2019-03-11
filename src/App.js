import * as vars from "./styles/vars";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ThemeProvider, } from "styled-components";

import React from 'react';
import Footer from "./components/common/Footer";
import Helmet from "react-helmet";
import Main from "./components/common/Main";
import Nav from "./components/common/Nav";
import ScrollToTop from "./components/common/ScrollToTop";
import GlobalStyle from "./styles/globalStyles";
import routesConfig from "./routesConfig";

// --------------------------------------------------

const defaultColors = {
	...vars.colors,
};

const routes = routesConfig.map(
	({ component: Component, path, exact, ...rest }, i) => {
		const render = props => <Component { ...props } { ...rest } />;

		return (
			<Route key = { `${ path }-${ i }` } path = { path } exact = { exact } render = { render } />
		);
	},
);

export default () => (
	<Router>
		<ScrollToTop>
			<ThemeProvider theme = { defaultColors }>
				<div>
					<GlobalStyle />
					
					<Helmet>
						<meta charSet = "utf-8" />

						<title>Islington GP Federation</title>
						
						<meta name = "google-site-verification" content = "6r6YAzSh8Y4dFXQzkSyNbAqMu0Z2JUP29IpOP9rXfPk" />

						<link
							rel = "canonical"
							href = "http://www.islingtongpfederation.org/"
						/>
					</Helmet>

					<Nav key = "Nav" />

					<Main key = "Main">
						<Switch>{routes}</Switch>
					</Main>

					<Footer key = "Footer" />
				</div>
			</ThemeProvider>
		</ScrollToTop>
	</Router>
);
