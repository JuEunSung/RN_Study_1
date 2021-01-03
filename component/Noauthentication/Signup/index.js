/* eslint-disable operator-linebreak */
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import TextInput from '../../Common/TextInput';

import { use } from '../../../context';

import style from './style';

class Signup extends React.Component {
  valid_m_username = false;

  valid_m_password = false;

  state = {
    m_username: '',
    m_password: '',
    m_password_confirm: '',
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
                validationText="비밀번호와 확인이 일치하지 않습니다"
                checkValidation={(text) => {
                  if (text !== this.state.m_password_confirm) {
                    this.valid_m_password = false;

                    return false;
                  }

                  this.valid_m_password = true;

                  return true;
                }}
                onChangeText={(text) => {
                  this.setState({
                    m_password: text,
                  });
                }}
              />
            </View>
            <View style={style.formChild}>
              <TextInput
                textContentType="password"
                label="Password Confirm"
                isRequire={true}
                requireText="비밀번호를 입력해주세요"
                validationText="비밀번호와 확인이 일치하지 않습니다"
                checkValidation={(text) => {
                  if (text !== this.state.m_password) {
                    this.valid_m_password = false;

                    return false;
                  }

                  this.valid_m_password = true;

                  return true;
                }}
                onChangeText={(text) => {
                  this.setState({
                    m_password_confirm: text,
                  });
                }}
              />
            </View>
            <View style={style.signupButtonWrapper}>
              <Pressable
                style={[style.signupButton, this.canSignup() ? {} : style.disableSignupButton]}
                onPress={() => {
                  const { m_username, m_password } = this.state;

                  // 회원가입 API 호출
                  // ...

                  this.props.$action.memberToken('MEMBER_TOKEN');
                }}
                disabled={!this.canSignup()}>
                <Text style={style.signupButtonText}>확인</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }

  canSignup() {
    return (
      this.valid_m_username &&
      this.valid_m_password &&
      this.state.m_username &&
      this.state.m_password &&
      this.state.m_password_confirm
    );
  }
}

export default use(Signup);
