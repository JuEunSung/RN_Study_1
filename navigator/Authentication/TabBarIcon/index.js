/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { View, Text, Image } from 'react-native';

import { MENU } from '../../../constant';
import { use } from '../../../context';

import style from '../style';

class TabBarIcon extends React.Component {
  render() {
    const { routeName, color, isFocused } = this.props.$data;

    return (
      <View style={[style.icon, isFocused ? style.focusIcon : {}]}>
        <View style={[style.icon_box, isFocused ? style.focusTab : {}]}>
          <Image
            source={this.getImage()}
            style={[style.icon_img, isFocused ? style.focusTabImage : {}]}
            resizeMode="contain"
          />
        </View>
        {isFocused ? null : (
          <View style={style.icon_txt}>
            <Text style={[{ color }, style.icon_txt_font]}>{routeName}</Text>
          </View>
        )}
      </View>
    );
  }

  getImage() {
    const { routeName, isFocused } = this.props.$data;
    const assetImagePrefix = '../../../assets/image/';

    if (routeName === MENU.AUTHENTICATION.TAB.HOME) {
      return isFocused ? require(`${assetImagePrefix}onHomeIcon.png`) : require(`${assetImagePrefix}offHomeIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.SCHEDULE) {
      return isFocused
        ? require(`${assetImagePrefix}onScheduleIcon.png`)
        : require(`${assetImagePrefix}offScheduleIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.MAP) {
      return isFocused ? require(`${assetImagePrefix}onMapIcon.png`) : require(`${assetImagePrefix}offMapIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.MESSAGE) {
      return isFocused
        ? require(`${assetImagePrefix}onMessageIcon.png`)
        : require(`${assetImagePrefix}offMessageIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.SETTING) {
      return isFocused
        ? require(`${assetImagePrefix}onSettingIcon.png`)
        : require(`${assetImagePrefix}offSettingIcon.png`);
    }

    return null;
  }
}

export default use(TabBarIcon);
