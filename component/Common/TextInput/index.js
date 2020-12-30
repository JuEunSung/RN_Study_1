import React from 'react';
import { View, Text, TextInput as Input, Pressable } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { MAIN_TEXT_COLOR } from '../../../constant';

import style from './style';

/**
 * Require
 *   label: string
 *   onChangeText: function (text) { ... }
 *
 * Optional
 *   isRequire: boolean
 *   requireText: string
 *   textContentType: string
 *   keyboardType: string
 *   textContentType: string
 *   validationText: string
 *   checkValidation: function (text) { ... }
 */
class TextInput extends React.Component {
  state = {
    inputFlag: false,
    text: '',
  };

  render() {
    return (
      <View>
        <Text style={[style.label, this.isNotFill() || this.isNotValid() ? style.labelNotValidation : {}]}>
          {this.props.label}
        </Text>
        <View style={style.textInputWrapper}>
          <Input
            textContentType={this.props.textContentType || 'none'}
            keyboardType={this.props.keyboardType || 'default'}
            secureTextEntry={this.props.textContentType === 'password'}
            style={style.textInput}
            value={this.state.text}
            onChangeText={(text) => {
              this.setState(
                {
                  inputFlag: true,
                  text,
                },
                () => {
                  if (this.props.onChangeText) {
                    this.props.onChangeText(text);
                  }
                },
              );
            }}
          />
          {this.state.text ? (
            <Pressable
              style={style.clearButtonWrapper}
              onPress={() => {
                this.setState(
                  {
                    text: '',
                  },
                  () => {
                    if (this.props.onChangeText) {
                      this.props.onChangeText('');
                    }
                  },
                );
              }}>
              <AntDesign name="closecircleo" size={27} color={MAIN_TEXT_COLOR} />
            </Pressable>
          ) : null}
        </View>
        <View
          style={[style.textInputLine, this.isNotFill() || this.isNotValid() ? style.textInputLineValidation : {}]}
        />
        <View style={style.validationTextWrapper}>
          {this.props.requireText && this.isNotFill() ? (
            <Text style={style.validationText}>{this.props.requireText}</Text>
          ) : null}
          {this.props.validationText && this.isNotValid() ? (
            <Text style={style.validationText}>{this.props.validationText}</Text>
          ) : null}
        </View>
      </View>
    );
  }

  isNotFill() {
    const isRequire = this.props.isRequire || false;

    if (!isRequire) {
      return false;
    }

    return this.state.inputFlag && !this.state.text;
  }

  isNotValid() {
    const defaultCheckValidation = () => true;
    const checkValidation = this.props.checkValidation || defaultCheckValidation;
    const isRequire = this.props.isRequire || false;

    if (!isRequire) {
      return false;
    }

    return this.state.inputFlag && this.state.text && !checkValidation(this.state.text);
  }
}

export default TextInput;
