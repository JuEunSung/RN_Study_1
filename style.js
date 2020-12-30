import { StyleSheet } from 'react-native';

import { MAIN_BACKGROUND_COLOR } from './constant';

export default StyleSheet.create({
  authenticationSafeAreaView: {
    flex: 1,
  },
  noauthenticationSafeAreaView: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  appEntryView: {
    flex: 1,
  },
});
