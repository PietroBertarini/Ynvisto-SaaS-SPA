import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import './Assets/fonts/Zurich/zurich_light_bt.ttf';
import './Assets/fonts/Zurich/zurich_bold_bt.ttf';
import './Assets/fonts/SfPro/SF-Pro-Display-Bold.otf';
import './Assets/fonts/SfPro/SF-Pro-Display-Medium.otf';
import './Assets/fonts/Punk.otf';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import * as serviceWorker from './serviceWorker';

import App from './App/App';
import theme from './Theme/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>, document.getElementById('root'),
);

serviceWorker.register();
