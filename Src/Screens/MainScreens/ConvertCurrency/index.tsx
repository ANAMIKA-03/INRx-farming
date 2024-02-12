import React, { useState } from 'react';
import {
	SafeAreaView,
	StatusBar,
	View,
	Image,
	Text,
	TouchableOpacity,
	Platform,
	ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';


export type Props = {
	navigation: any;
};

const ConvertCurrency = (props: any) => {
	const { navigation } = props;

	return (
		<SafeAreaView style={Styles.safeAreaContainer}>
			<StatusBar barStyle={'dark-content'} />
			<View style={Styles.mainContainer}>

				{/* Header */}
				<View style={Styles.headerContainer}>
					<View style={Styles.headerWrapper}>
						<TouchableOpacity style={Styles.leftWrapper}>
							<Image source={Images.user} style={Styles.userIcon} />
							<Text style={Styles.userTitle}>{`David`}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => { navigation.goBack() }}>
							<Image source={Images.chevronRight} style={Styles.notifyIcon} />
						</TouchableOpacity>
					</View>
				</View>
				{/* Main Content */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.scrollContainer}>

						{/* YOU PAY */}
						<View style={Styles.listContainer}>
							<View style={Styles.listInner}>
								<View>
									<Text style={Styles.listDescription}>{"YOU PAY"}</Text>
									<Text style={Styles.listTitle}>{"2500"}</Text>
								</View>
								<TouchableOpacity style={Styles.listIconWrap}>
									<View style={Styles.leftWrap}>
										<View style={Styles.iconWrap}>
											<Image source={Images.currencyLogo} style={Styles.currencyIcon} />
										</View>
										<Text style={Styles.currencyTitle}>{"INR"}</Text>
									</View>
									<Image source={Images.arrowDown} style={Styles.arrowIcon} />
								</TouchableOpacity>
							</View>
						</View>

						{/* YOU GET */}
						<View style={Styles.getContainer}>
							<View style={Styles.listInner}>
								<View>
									<Text style={Styles.listDescription}>{"YOU GET"}</Text>
									<Text style={Styles.listTitle}>{"5000"}</Text>
								</View>
								<TouchableOpacity style={Styles.listIconWrap}>
									<View style={Styles.leftWrap}>
										<View style={Styles.iconWrap}>
											<Image source={Images.convertInrx} style={Styles.inrxIcon} />
										</View>
										<Text style={Styles.currencyTitle}>{"INRx"}</Text>
									</View>
									<Image source={Images.arrowDown} style={Styles.arrowIcon} />
								</TouchableOpacity>
							</View>
						</View>
						<Text style={Styles.currencyRate}>{"1 INRx = 0.50 INR"}</Text>


						<TouchableOpacity style={Styles.sendButton}>
							<Text style={Styles.sendTitle}>{`Convert`}</Text>
						</TouchableOpacity>

					</View>
				</ScrollView>

			</View>
		</SafeAreaView>
	);
}

export default ConvertCurrency;
