import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import TextInput from '../../Common/TextInput';

import style from './style';

class SigninComponent extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.container}>
          <View style={style.form}>
            <View style={style.formChild}>
              <TextInput label="Username" />
            </View>
            <View style={style.formChild}>
              <TextInput textContentType="password" label="Password" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SigninComponent;
