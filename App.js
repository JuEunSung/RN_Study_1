/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { MainProvider } from './context';

import AppEntry from './AppEntry';

class App extends React.Component {
  render() {
    return (
      <MainProvider>
        <AppEntry />
      </MainProvider>
    );
  }
}

export default App;
