import React from 'react';

import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import style from './style';

class TextInputComponent extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.label}>{this.props.label}</Text>
        <View style={style.textInputWrapper}>
          <TextInput
            textContentType={this.props.textContentType || 'none'}
            keyboardType={this.props.keyboardType || 'default'}
            secureTextEntry={this.props.textContentType === 'password'}
            style={style.textInput}
          />
          <TouchableOpacity style={style.clearButtonWrapper}>
            <Image
              style={style.clearButton}
              source={require('../../assets/image/clearButton.jpg')}
            />
          </TouchableOpacity>
        </View>
        <View style={style.textInputLine} />
      </View>
    );
  }
}

export default TextInputComponent;
