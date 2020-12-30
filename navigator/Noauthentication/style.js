import { StyleSheet } from 'react-native';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { MAIN_TEXT_COLOR } from '../../constant';

export default StyleSheet.create({
  icon_back: {
    marginLeft: 25,
    paddingTop: 2,
  },
  headerTitle: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: MAIN_TEXT_COLOR,
  },
});
