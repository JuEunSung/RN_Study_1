import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { MAIN_TEXT_COLOR } from '../../../constant';

export default StyleSheet.create({
  label: {
    fontSize: hp('3%'),
    color: MAIN_TEXT_COLOR,
  },
  labelNotValidation: {
    color: '#F90909',
  },
  textInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textInput: {
    width: '87%',
    height: hp('5.5%'),
    fontSize: hp('2.3%'),
    marginBottom: 0,
    color: MAIN_TEXT_COLOR,
  },
  textInputLine: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: MAIN_TEXT_COLOR,
  },
  textInputLineValidation: {
    borderTopColor: '#F90909',
  },
  clearButtonWrapper: {
    width: wp('8%'),
    height: wp('8%'),
    marginBottom: 5,
  },
  clearButton: {
    width: hp('3.5%'),
    height: hp('3.5%'),
  },
  validationTextWrapper: {
    marginTop: 5,
    height: hp('2%'),
  },
  validationText: {
    color: '#F90909',
  },
});
