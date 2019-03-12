import * as R from 'ramda';
import * as mixins from 'codogo-utility-functions';
import * as vars from '../../styles/vars';
import styled from 'styled-components';
//import { objMap } from '../../lib/util';

// --------------------------------------------------

// const minHeights = objMap(
//   vars.dim.nav.height,
//   (k, val) => `calc(100vh - ${val})`,
// );

export default styled.div`
  ${mixins.bpEither('margin-top', vars.dim.nav.height)};
  ${mixins.bpEither('margin-bottom', vars.dim.footer.height)};
  background-color: ${R.path(['theme', 'body'])};
`;
