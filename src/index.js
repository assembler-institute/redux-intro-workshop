import React from 'react';
import ReactDOM from 'react-dom';

import Provider from './redux/Provider';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
