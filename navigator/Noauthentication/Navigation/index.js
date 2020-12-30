import React from 'react';
import { Text, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MENU, MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR } from '../../../constant';
import { use, navigationRef } from '../../../context';

import ForgetPassword from '../../../component/Noauthentication/ForgetPassword';
import Welcome from '../../../component/Noauthentication/Welcome';
import Signin from '../../../component/Noauthentication/Signin';
import Signup from '../../../component/Noauthentication/Signup';

import style from '../style';

const Stack = createStackNavigator();

class NoauthenticationNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: MAIN_BACKGROUND_COLOR,
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerLeft: (navigation) => {
              if (!navigation.canGoBack) {
                return null;
              }

              return (
                <Pressable
                  activeOpacity={0.9}
                  style={style.icon_back}
                  onPress={() => {
                    this.props.$navigation.pop();
                  }}>
                  <Ionicons name="chevron-back" size={30} color={MAIN_TEXT_COLOR} />
                </Pressable>
              );
            },
            headerTitle: (props) => {
              if (props.children === MENU.NOAUTHENTICATION.STACK.WELCOME) {
                return <Text />;
              }

              return <Text style={style.headerTitle}>{props.children}</Text>;
            },
            headerTitleAlign: 'center',
          }}
          initialRouteName={MENU.NOAUTHENTICATION.STACK.WELCOME}>
          <Stack.Screen name={MENU.NOAUTHENTICATION.STACK.FORGET_PASSWORD}>
            {() => <ForgetPassword data={{ navigationParams: this.props.route?.params }} />}
          </Stack.Screen>
          <Stack.Screen name={MENU.NOAUTHENTICATION.STACK.WELCOME}>
            {() => <Welcome data={{ navigationParams: this.props.route?.params }} />}
          </Stack.Screen>
          <Stack.Screen name={MENU.NOAUTHENTICATION.STACK.SIGNIN}>
            {() => <Signin data={{ navigationParams: this.props.route?.params }} />}
          </Stack.Screen>
          <Stack.Screen name={MENU.NOAUTHENTICATION.STACK.SIGNUP}>
            {() => <Signup data={{ navigationParams: this.props.route?.params }} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default use(NoauthenticationNavigation);
