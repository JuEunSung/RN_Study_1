import { Alert } from 'react-native';

class Util {
  alert(title, content) {
    const promise = new Promise((resolve) => {
      Alert.alert(title, content, [
        {
          text: '확인',
          onPress: () => {
            resolve();
          },
        },
      ]);
    });

    return promise;
  }

  confirm(title, content) {
    const promise = new Promise((resolve) => {
      Alert.alert(title, content, [
        {
          text: '취소',
          onPress: () => {
            resolve(false);
          },
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => {
            resolve(true);
          },
        },
      ]);
    });

    return promise;
  }
}

export default new Util();
