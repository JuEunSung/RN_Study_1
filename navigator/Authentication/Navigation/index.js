import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../TabBar';

import { navigationRef } from '../../../context';
import { MENU } from '../../../constant';

import Home from './Home';
import Schedule from './Schedule';
import Map from './Map';
import Message from './Message';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

class TabNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator initialRouteName={MENU.AUTHENTICATION.TAB.HOME} tabBar={(props) => <TabBar data={props} />}>
          <Tab.Screen name={MENU.AUTHENTICATION.TAB.HOME} component={Home} unmountOnBlur={true} />
          <Tab.Screen name={MENU.AUTHENTICATION.TAB.SCHEDULE} component={Schedule} unmountOnBlur={true} />
          <Tab.Screen name={MENU.AUTHENTICATION.TAB.MAP} component={Map} unmountOnBlur={true} />
          <Tab.Screen name={MENU.AUTHENTICATION.TAB.MESSAGE} component={Message} unmountOnBlur={true} />
          <Tab.Screen name={MENU.AUTHENTICATION.TAB.SETTING} component={Setting} unmountOnBlur={true} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default TabNavigation;
