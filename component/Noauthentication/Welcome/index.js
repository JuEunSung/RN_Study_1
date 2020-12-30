import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { MENU } from '../../../constant';
import { use } from '../../../context';

import style from './style';

class Welcome extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.titleWrapper}>
          <Text style={style.title}>여행기</Text>
          <Text style={style.subtitle}>열심히 일 한 당신 떠나요!</Text>
        </View>
        <View style={style.buttonWrapper}>
          <Pressable
            style={style.signinButton}
            activeOpacity={0.7}
            onPress={() => {
              this.props.$navigation.push(MENU.NOAUTHENTICATION.STACK.SIGNIN);
            }}>
            <Text style={style.signinButtonText}>로그인</Text>
          </Pressable>
          <Pressable
            style={style.signupButton}
            activeOpacity={0.7}
            onPress={() => {
              this.props.$navigation.push(MENU.NOAUTHENTICATION.STACK.SIGNUP);
            }}>
            <Text style={style.signupButtonText}>회원가입</Text>
          </Pressable>
        </View>
        <View style={style.infoWrapper}>
          <Image source={require('../../../assets/image/infoIcon.png')} resizeMode="contain" style={style.infoIcon} />
          <Text style={style.infoText}>본 서비스는 여행기의 내용을{'\n'}회원끼리 공유하는 서비스 입니다.</Text>
        </View>
      </View>
    );
  }
}

export default use(Welcome);
