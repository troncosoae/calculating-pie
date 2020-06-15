import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './Redux/store'
import MountWrapper from './Structure/MountWrapper'


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <MountWrapper />
    </Provider>
  );
}
