import { render } from 'react-snapshot';

import App from './App';
import React from 'react';

render(<App />, document.getElementById('root'));

// Unregister service workers
navigator &&
  navigator.serviceWorker &&
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(reg => {
      reg.unregister();
    });
  });
