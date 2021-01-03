import React from 'react';
import { View, Text, Pressable } from 'react-native';

import TextInput from '../../Common/TextInput';

import Util from '../../../util/util';
import { use } from '../../../context';

import style from './style';

class ForgetPassword extends React.Component {
  valid_m_username = false;

  state = {
    m_username: '',
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
            <View style={style.findButtonWrapper}>
              <Pressable
                style={[style.findButton, this.canFind() ? {} : style.disableFindButton]}
                onPress={async () => {
                  const { m_username } = this.state;

                  // 비밀번호 찾기 API 호출
                  // ...

                  await Util.alert('알림', '임시 비밀번호를 이메일로 전송했습니다.');

                  this.props.$navigation.pop();
                }}
                disabled={!this.canFind()}>
                <Text style={style.findButtonText}>비밀번호 찾기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }

  canFind() {
    return this.valid_m_username && this.state.m_username;
  }
}

export default use(ForgetPassword);
