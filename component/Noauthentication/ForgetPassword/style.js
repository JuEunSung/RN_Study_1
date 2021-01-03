import { StyleSheet } from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR } from '../../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  form: {
    paddingTop: hp('13%'),
  },
  formChild: {
    paddingHorizontal: wp('10%'),
    marginBottom: 16,
  },
  findButtonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp('6%'),
  },
  findButton: {
    width: wp('80%'),
    height: 60,
    backgroundColor: MAIN_TEXT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
  },
  disableFindButton: {
    opacity: 0.7,
  },
  findButtonText: {
    color: MAIN_BACKGROUND_COLOR,
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
});
