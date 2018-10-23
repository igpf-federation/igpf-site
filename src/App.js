import * as vars from "src/styles/vars";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import { ThemeProvider, } from "styled-components";

import Footer from "src/components/common/Footer";
import Helmet from "react-helmet";
import Main from "src/components/common/Main";
import Nav from "src/components/common/Nav";
import ScrollToTop from "src/components/common/ScrollToTop";
import GlobalStyle from "src/styles/globalStyles";
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
