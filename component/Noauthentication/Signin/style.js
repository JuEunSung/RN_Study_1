import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingTop: hp('20%'),
  },
  formChild: {
    paddingHorizontal: wp('15%'),
    marginBottom: 32,
  },
});
