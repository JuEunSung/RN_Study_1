import { StyleSheet } from 'react-native';

import { isIphoneX } from 'react-native-iphone-x-helper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  tabbar: {
    width: wp('100%'),
    height: isIphoneX() ? hp('10%') : hp('8%'),
    flexDirection: 'row',
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  tabbarItem: {
    width: '20%',
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: hp('1%'),
  },
  icon: {
    marginBottom: isIphoneX() ? hp('1%') : hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_box: {
    width: wp('20%'),
    height: hp('4.5%'),
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTab: {
    width: wp('16%'),
    height: hp('7%'),
    backgroundColor: '#52B669',
    borderRadius: 500,
  },
  icon_img: {
    width: wp('5%'),
    height: hp('5%'),
  },
  focusTabImage: {
    width: wp('7%'),
    height: hp('7%'),
  },
  icon_bage: {
    position: 'absolute',
    right: wp('6%'),
    top: 0,
    backgroundColor: '#d74339',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_bage_txt: {
    color: 'white',
    fontSize: hp('1%'),
    fontWeight: 'bold',
  },
  icon_txt: {
    alignItems: 'center',
    alignContent: 'center',
  },
  icon_txt_font: {
    fontSize: hp('1.3%'),
  },
  icon_back: {
    marginLeft: 25,
    paddingTop: 2,
  },
});
