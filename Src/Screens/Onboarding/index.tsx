import React, { useRef, useState, useEffect } from 'react';
import { View, Image, Text, SafeAreaView, Animated } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';

const slides = [
  {
    key: 1,
    title: `The First Indian Stable Asset`,
    pic: Images.onbord1,
  },
  {
    key: 2,
    title: `Packed on 1:1 Fiat Ratio `,
    pic1: Images.onboard2,
    pic2: Images.onboard22, 
  },
  {
    key: 3,
    title: `Backed by Stable Asset & Fiat Collateral`,
    pic: Images.onboard3,
  },
];

export default function Onboarding(props: any) {
  let slider: any = useRef();
  const { navigation } = props;
  const [next, setNext] = useState(0);
  const translateX1 = useRef(new Animated.Value(-300)).current;
  const translateX2 = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (next === 1) {
      Animated.parallel([

        Animated.timing(translateX1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateX2, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        })
      ]).start();

      const timer1 = setTimeout(() => {
        Animated.timing(translateX1, {
          toValue: 100,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2000);

      const timer2 = setTimeout(() => {
        Animated.timing(translateX2, {
          toValue: -105,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      translateX1.setValue(-300);
      translateX2.setValue(300);
    }
  }, [next]);


  useEffect(() => {
    if (next === 1) {
      const timer1 = setTimeout(() => { 
        Animated.timing(translateX1, {
          toValue: 100,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2500);
  
      const timer2 = setTimeout(() => { 
        Animated.timing(translateX2, {
          toValue: -100,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2500);
  
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      translateX1.setValue(-500);
      translateX2.setValue(500);
    }
  }, [next]);
  


  // useEffect(() => {
  //   if (next === 1) {
      
  //     const animateTranslateX1 = () => {
  //       return Animated.sequence([
  //         Animated.timing(translateX1, {
  //           toValue: 100,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX1, {
  //           toValue: 150,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX1, {
  //           toValue: 200,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //       ]);
  //     };

  //     const animateTranslateX2 = () => {
  //       return Animated.sequence([
  //         Animated.timing(translateX2, {
  //           toValue: -100,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX2, {
  //           toValue: -150,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX2, {
  //           toValue: -200,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //       ]);
        
  //     };

  //     const timer1 = setTimeout(() => {
  //       animateTranslateX1().start();
  //     }, 2500);

  //     const timer2 = setTimeout(() => {
  //       animateTranslateX2().start();
  //     }, 2500);

  //     const timer3 = setTimeout(() => {
  //       translateX1.setValue(-300);
  //       translateX2.setValue(300);
  //     }, 4500); 

  //     return () => {
  //       clearTimeout(timer1);
  //       clearTimeout(timer2);
  //       clearTimeout(timer3);
  //     };
  //   } else {
  //     translateX1.setValue(-300);
  //     translateX2.setValue(300);
  //   }
  // }, [next]);

  const goNext = () => {
    setNext(next + 1);
    slider?.goToSlide(next + 1, true);
  };

  const changeSlide = (e: any) => {
    setNext(e);
    if (e === 2) {
      navigation.navigate("Login");
    }
  };

  const _renderItem = ({ item }: any) => {
    return (
      <SafeAreaView style={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.headerTitle}>{item?.title}</Text>
            <View style={Styles.mainInnerWrap}>
              {item.key === 2 ? (
                <>
                  <Animated.Image
                    source={item?.pic1}
                    style={[
                      Styles.centerPicTwo,
                      { transform: [{ translateX: translateX1 }] }
                    ]}
                  />
                  <Animated.Image
                    source={item?.pic2}
                    style={[
                      Styles.centerPicTwo,
                      { transform: [{ translateX: translateX2 }] }
                    ]}
                  />
                </>
              ) : (
                <Image
                  source={item?.pic} 
                  style={item.key == "1" ? Styles.centerPicOne : item.key == "2" ? Styles.centerPicTwo : Styles.centerPicThree}
                />
              )}
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
      dotStyle={{
        width: hp(9.5),
        height: 6,
        marginRight: hp(1.5),
        marginLeft: hp(1.5),
        borderRadius: 10,
        backgroundColor: Colors.Black,
        marginBottom: hp("30%"),
      }}
      activeDotStyle={{
        width: hp(9.5),
        height: 6,
        marginRight: hp(1.5),
        marginLeft: hp(1.5),
        borderRadius: 10,
        backgroundColor: Colors.DarkGreen,
        marginBottom: hp("30%"),
      }}
      dotClickEnabled={true}
    />
  );
}
