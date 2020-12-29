import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    height: hp('40%'),
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#eee',
    fontSize: 90,
  },
  subtitle: {
    color: '#eee',
    fontSize: 18,
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
    backgroundColor: '#eee',
    borderRadius: 11,
  },
  signinButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#41BD40',
  },
  signupButton: {
    marginTop: 25,
    width: wp('80%'),
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 11,
  },
  signupButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#41BD40',
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
    color: '#eee',
    textAlign: 'center',
  },
});
