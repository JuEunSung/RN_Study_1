import React from 'react';
import { View, Text, Pressable } from 'react-native';

import TextInput from '../../Common/TextInput';

import { MENU } from '../../../constant';
import { use } from '../../../context';

import style from './style';

class Signin extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.container}>
          <View style={style.form}>
            <View style={style.formChild}>
              <TextInput
                label="Username"
                isRequire={true}
                requireText="이메일을 입력해주세요"
                validationText="올바른 이메일을 입력하세요"
                checkValidation={(text) => {
                  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                  return regex.test(text);
                }}
              />
            </View>
            <View style={style.formChild}>
              <TextInput
                textContentType="password"
                label="Password"
                isRequire={true}
                requireText="비밀번호를 입력해주세요"
                validationText="올바른 비밀번호을 입력하세요"
              />
            </View>
          </View>
          <View style={style.forgetPasswordButtonWrapper}>
            <Pressable
              style={style.forgetPasswordButton}
              onPress={() => {
                this.props.$navigation.push(MENU.NOAUTHENTICATION.STACK.FORGET_PASSWORD);
              }}>
              <Text style={style.forgetPasswordText}>비밀번호 찾기</Text>
            </Pressable>
          </View>
          <View style={style.loginButtonWrapper}>
            <Pressable
              style={style.loginButton}
              onPress={() => {
                this.props.$action.memberToken('test');
              }}>
              <Text style={style.loginButtonText}>확인</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

export default use(Signin);
