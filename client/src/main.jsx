import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./fonts/font.css"
import App from './App.jsx';
import './App.css';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId='{`${GOOGLE_REST_API_KEY}`}'>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
