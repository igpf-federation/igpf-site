import styled from "styled-components";

import * as mixins from "codogo-utility-functions";
import * as vars from "../../styles/vars";
import { objMap, } from "src/lib/util";

// --------------------------------------------------

const minHeights = objMap(
	vars.dim.nav.height,
	(k, val) => `calc(100vh - ${ val })`,
);

export default styled.div`
	${ mixins.bpEither("margin-top", vars.dim.nav.height) };
	background-color: ${ R.path([ "theme", "body", ]) };
`;
