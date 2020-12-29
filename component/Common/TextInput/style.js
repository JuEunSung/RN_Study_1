import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  label: {
    fontSize: hp('3%'),
    color: '#eee',
  },
  textInputWrapper: {
    flexDirection: 'row',
  },
  textInput: {
    width: '95%',
    height: hp('5.5%'),
    fontSize: hp('2.5%'),
  },
  textInputLine: {
    width: wp('77%'),
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  clearButtonWrapper: {
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 5,
  },
  clearButton: {
    width: hp('3.5%'),
    height: hp('3.5%'),
  },
});
