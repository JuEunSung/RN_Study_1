/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import { MainProvider } from './context';

import ComponentWrapper from './ComponentWrapper';

import style from './style';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <MainProvider>
        <SafeAreaView style={style.wrappedSafeAreaView}>
          <ComponentWrapper />
        </SafeAreaView>
      </MainProvider>
    );
  }
}

export default App;
