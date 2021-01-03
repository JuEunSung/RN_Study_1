import React from 'react';
import { View, Text, Pressable } from 'react-native';

import TextInput from '../../Common/TextInput';

import { MENU } from '../../../constant';
import { use } from '../../../context';

import style from './style';

class Signin extends React.Component {
  valid_m_username = false;

  state = {
    m_username: '',
    m_password: '',
  };

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
                  const result = regex.test(text);

                  this.valid_m_username = result;

                  return result;
                }}
                onChangeText={(text) => {
                  this.setState({
                    m_username: text,
                  });
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
                onChangeText={(text) => {
                  this.setState({
                    m_password: text,
                  });
                }}
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
          <View style={style.signinButtonWrapper}>
            <Pressable
              style={[style.signinButton, this.canSignin() ? {} : style.disableSigninButton]}
              onPress={() => {
                const { m_username, m_password } = this.state;

                // 로그인 API 호출
                // ...

                this.props.$action.memberToken('MEMBER_TOKEN');
              }}
              disabled={!this.canSignin()}>
              <Text style={style.signinButtonText}>확인</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  canSignin() {
    return this.valid_m_username && this.state.m_username && this.state.m_password;
  }
}

export default use(Signin);
