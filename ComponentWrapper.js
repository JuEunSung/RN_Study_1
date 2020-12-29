import React from 'react';
import { View } from 'react-native';

import { use } from './context';

import AuthenticationNavigation from './navigator/Authentication/Navigation';

import style from './style';

class ComponentWrapper extends React.Component {
  render() {
    return <View style={style.componentWrapperView}>{this.getMenu()}</View>;
  }

  getMenu() {
    return <AuthenticationNavigation />;
  }
}

export default use(ComponentWrapper);
