import React from 'react';
import { printObj } from '../../lib/util';

export default data => () => (
  <div
    style={{
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      fontSize: '11px',
    }}
  >
    {printObj(data)}
  </div>
);
