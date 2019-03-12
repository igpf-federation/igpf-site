import * as vars from './styles/vars';
import Footer from './components/common/Footer';
import globalStyles from './styles/globalStyles';
import Helmet from 'react-helmet';
import Main from './components/common/Main';
import Nav from './components/common/Nav';
import React from 'react';
import routesConfig from './routesConfig';
import ScrollToTop from './components/common/ScrollToTop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// --------------------------------------------------

globalStyles();

const defaultColors = {
  ...vars.colors,
};

const routes = routesConfig.map(
  ({ component: Component, path, exact, ...rest }, i) => {
    const render = props => <Component {...props} {...rest} />;

    return (
      <Route key={`${path}-${i}`} path={path} exact={exact} render={render} />
    );
  },
);

const App = () => (
  <Router>
    <ScrollToTop>
      <ThemeProvider theme={defaultColors}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />

            <title>Islington GP Federation</title>

            <meta
              name="google-site-verification"
              content="6r6YAzSh8Y4dFXQzkSyNbAqMu0Z2JUP29IpOP9rXfPk"
            />

            <link
              rel="canonical"
              href="https://www.islingtongpfederation.org/"
            />
          </Helmet>

          <Nav key="Nav" />

          <Main key="Main">
            <Switch>{routes}</Switch>
          </Main>

          <Footer key="Footer" />
        </div>
      </ThemeProvider>
    </ScrollToTop>
  </Router>
);

export default App;
