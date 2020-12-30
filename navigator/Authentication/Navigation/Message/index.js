import React from 'react';
import { Pressable } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MENU, MAIN_TEXT_COLOR } from '../../../../constant';
import { use } from '../../../../context';

import Message from '../../../../component/Authentication/Message';

import style from '../../style';

const Stack = createStackNavigator();

class MessageNavigation extends React.Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
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
          headerTitleAlign: 'center',
        }}
        initialRouteName={MENU.AUTHENTICATION.STACK.MESSAGE}>
        <Stack.Screen name={MENU.AUTHENTICATION.STACK.MESSAGE}>
          {() => <Message data={{ navigationParams: this.props.route?.params }} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

export default use(MessageNavigation);
