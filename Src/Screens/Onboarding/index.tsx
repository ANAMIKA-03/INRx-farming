import React, { useRef, useState } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';

const slides = [
  {
    key: 1,
    title: `The Future of Trading is Here`,
    pic: Images.onboard_one,
  },
  {
    key: 2,
    title: `Buy,Sell and Hold Crypto `,
    pic: Images.onboard_two,
  },
  {
    key: 3,
    title: `Be Early to The Future of Finance`,
    pic: Images.onboard_three,
  },
];

export default function Onboarding(props: any) {
  let slider: any = useRef();
  const { navigation } = props

  const [next, setNext] = useState(0);

  const goNext = () => {
    setNext(next + 1)
    slider?.goToSlide(next + 1, true);
  };

  const changeSlide = (e: any) => {
    setNext(e)
    if (e == 2) {
      navigation.navigate("Login")
    }
  };

  const _renderItem = ({ item }: any) => {
    return (

      <SafeAreaView style={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.headerTitle}>{item?.title}</Text>

            <View style={Styles.mainInnerWrap}>
              <Image source={item?.pic} style={item.key == "1" ? Styles.centerPicOne : item.key == "2" ? Styles.centerPicTwo : Styles.centerPicThree} />
            </View>

          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <AppIntroSlider
      ref={(ref: any) => (slider = ref)}
      onSlideChange={(e) => changeSlide(e)}
      renderItem={_renderItem}
      data={slides}
      bottomButton={false}
      dotStyle={{ width: hp(9.5), height: 6, marginRight: hp(1.5), marginLeft: hp(1.5), borderRadius: 10, backgroundColor: Colors.Black, marginBottom: hp("30%") }}
      activeDotStyle={{ width: hp(9.5), height: 6, marginRight: hp(1.5), marginLeft: hp(1.5), borderRadius: 10, backgroundColor: Colors.DarkGreen, marginBottom: hp("30%") }}
      dotClickEnabled={true}
    />
  );
}
