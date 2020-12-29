import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import style from './style';

class WelcomeComponent extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.titleWrapper}>
          <Text style={style.title}>여행기</Text>
          <Text style={style.subtitle}>열심히 일 한 당신 떠나요!</Text>
        </View>
        <View style={style.buttonWrapper}>
          <TouchableOpacity style={style.signinButton} activeOpacity={0.7} onPress={() => {}}>
            <Text style={style.signinButtonText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.signupButton} activeOpacity={0.7} onPress={() => {}}>
            <Text style={style.signupButtonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <View style={style.infoWrapper}>
          <Image source={require('../../../assets/image/infoIcon.png')} resizeMode="contain" style={style.infoIcon} />
          <Text style={style.infoText}>본 서비스는 여행기의 내용을 회원끼리{'\n'}공유하는 서비스 입니다.</Text>
        </View>
      </View>
    );
  }
}

export default WelcomeComponent;
