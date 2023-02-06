import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { theme } from './helpers/theme';
import { Container } from './components/reusable/reusable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ theme }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Container>
            <App />
          </Container>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
