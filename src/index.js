import React from 'react';
import ReactDOM from 'react-dom';

import ReduxProvider from './redux/Provider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
