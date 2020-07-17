import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './Redux/store'
import MountWrapper from './Structure/MountWrapper'


export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar barStyle={'light-content'} />
      <MountWrapper />
    </PersistGate>
    </Provider>
  );
}
