import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yiiznn0y.us.auth0.com"
      clientId="vYcQ6dZE5YEBBwUYEDHAfP5xjXlhXTWx"
      redirectUri={window.location.origin}
      audience="http://domdomegg.github.io/20220502-test"
      scope="read:messages"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
