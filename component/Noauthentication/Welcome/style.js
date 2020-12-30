import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR } from '../../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  titleWrapper: {
    height: hp('40%'),
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: MAIN_TEXT_COLOR,
    fontSize: hp('10%'),
  },
  subtitle: {
    color: MAIN_TEXT_COLOR,
    fontSize: hp('2.3%'),
    marginTop: 15,
  },
  buttonWrapper: {
    height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButton: {
    width: wp('80%'),
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_TEXT_COLOR,
    borderRadius: 11,
  },
  signinButtonText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: MAIN_BACKGROUND_COLOR,
  },
  signupButton: {
    marginTop: 25,
    width: wp('80%'),
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_TEXT_COLOR,
    borderRadius: 11,
  },
  signupButtonText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: MAIN_BACKGROUND_COLOR,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: wp('5%'),
    height: wp('5%'),
  },
  infoText: {
    width: wp('55%'),
    marginLeft: 5,
    color: MAIN_TEXT_COLOR,
    textAlign: 'center',
    fontSize: hp('1.6%'),
  },
});
