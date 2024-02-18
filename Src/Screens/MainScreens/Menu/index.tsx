import React, { useState } from 'react';
import {
	SafeAreaView,
	StatusBar,
	View,
	Image,
	Text,
	TouchableOpacity,
	FlatList,
	ImageBackground
} from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';


export type Props = {
	navigation: any;
};

const Menu = (props: any) => {
	const { navigation } = props;

	const MENU_DATA = [
		{
			id: "1",
			icon: Images.mintMenu,
			title: "Mint"
		},
		{
			id: "2",
			icon: Images.convertMenu,
			title: "Convert"
		},
		{
			id: "3",
			icon: Images.earnMenu,
			title: "Earn"
		},
		{
			id: "4",
			icon: Images.notifyMenu,
			title: "Notification"
		},
		{
			id: "5",
			icon: Images.transactionMenu,
			title: "Transaction"
		},
		{
			id: "6",
			icon: Images.auditMenu,
			title: "Audit"
		},
		{
			id: "7",
			icon: Images.walletMenu,
			title: "Wallet"
		},
		{
			id: "8",
			icon: Images.transparencyMenu,
			title: "Transparency"
		},
		{
			id: "9",
			icon: Images.collateralMenu,
			title: "Collateral"
		},
		{
			id: "10",
			icon: Images.aboutMenu,
			title: "About"
		},
		{
			id: "11",
			icon: Images.settingMenu,
			title: "Setting"
		},
		{
			id: "12",
			icon: Images.profileMenu,
			title: "Profile"
		},
	]

	const goToMenu = (data: any) => {
		if (data?.id == "1") {
			navigation.navigate("Supply")
		}
		else if (data?.id == "2") {
			navigation.navigate("ConvertCurrency")
		}
		else if (data?.id == "3") {
			navigation.navigate("FarmingRewards")
		}
		else if (data?.id == "4") {
			navigation.navigate("Notification")
		}
		else if (data?.id == "5") {
			navigation.navigate("History")
		}
		else if (data?.id == "6") {
			navigation.navigate("Audit")
		}
		else if (data?.id == "7") {
			navigation.navigate("Wallet")
		}
		else if (data?.id == "8") {
			navigation.navigate("Supply")
		}
		else if (data?.id == "9") {
			navigation.navigate("Collateral")
		}
		else if (data?.id == "10") {
			navigation.navigate("About")
		}
		else if (data?.id == "11") {
			navigation.navigate("Settings")
		}
		else {
			navigation.navigate("Profile")
		}
	}

	return (
		<SafeAreaView style={Styles.safeAreaContainer}>
			<StatusBar barStyle={'dark-content'} />
			<View style={Styles.mainContainer}>

				{/* Header */}
				<View style={Styles.headerContainer}>
					<View style={Styles.headerWrapper}>
						<TouchableOpacity onPress={() => { navigation.goBack() }}>
							<Image source={Images.back} style={Styles.backIcon} />
						</TouchableOpacity>
						<Text style={Styles.menuTitle}>{`Stable Assets`}</Text>
						<View style={Styles.assetsWrapper}>
							<View style={Styles.tabContainer}>
								<Text style={Styles.inrTitle}>{`INRx`}</Text>
							</View>

							<View style={Styles.tabContainer}>
								<Text style={Styles.inrTitle}>{`INR`}</Text>
							</View>
						</View>
						{/* Center Logo */}
						<View style={Styles.iconWrap}>
							<Image source={Images.convertInrx} style={Styles.currencyIcon} />
						</View>
					</View>
				</View>
				{/* Main Content */}
				<View style={Styles.mainDataContainer}>
					<ImageBackground source={Images.menuBackground} style={Styles.backgroundContainer}>
						<View style={Styles.menuInnerData}>

							<View style={Styles.mainFlat}>
								<FlatList
									data={MENU_DATA}
									keyExtractor={(item, index) => index.toString()}
									// style={Styles.mainFlat}
									showsVerticalScrollIndicator={false}
									showsHorizontalScrollIndicator={false}
									numColumns={3}
									renderItem={({ item, index }) => (
										<TouchableOpacity key={index}
											onPress={() => { goToMenu(item) }}
											style={Styles.viewFlat}>
											<Image source={item?.icon} style={Styles.flatIcon} />
											<Text style={Styles.iconTitle}>{item?.title}</Text>
										</TouchableOpacity>
									)}
								/>
							</View>

						</View>
					</ImageBackground>
				</View>

			</View>
		</SafeAreaView>
	);
}

export default Menu;
