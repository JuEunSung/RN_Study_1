import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { use } from './context';

import AuthenticationNavigation from './navigator/Authentication/Navigation';
import NoauthenticationNavigation from './navigator/Noauthentication/Navigation';

import style from './style';

class AppEntry extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={this.isAuthentication() ? style.authenticationSafeAreaView : style.noauthenticationSafeAreaView}>
        <View style={style.appEntryView}>{this.getMenu()}</View>
      </SafeAreaView>
    );
  }

  isAuthentication() {
    return !!this.props.$state.memberToken;
  }

  getMenu() {
    if (this.props.$state.memberToken) {
      return <AuthenticationNavigation />;
    }

    return <NoauthenticationNavigation />;
  }
}

export default use(AppEntry);
