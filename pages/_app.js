import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './../store';
import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';

import initFontAwesome from '../utils/initFontAwesome';

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // Load font awesome icons
  initFontAwesome();

  return getLayout(
    <UserProvider>
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </UserProvider>
  );
}
