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
			icon: Images.mintMenu,
			title: "Mint"
		},
		{
			icon: Images.convertMenu,
			title: "Convert"
		},
		{
			icon: Images.earnMenu,
			title: "Earn"
		},
		{
			icon: Images.notifyMenu,
			title: "Notification"
		},
		{
			icon: Images.transactionMenu,
			title: "Transaction"
		},
		{
			icon: Images.auditMenu,
			title: "Audit"
		},
		{
			icon: Images.walletMenu,
			title: "Wallet"
		},
		{
			icon: Images.transparencyMenu,
			title: "Transparency"
		},
		{
			icon: Images.collateralMenu,
			title: "Collateral"
		},
		{
			icon: Images.aboutMenu,
			title: "About"
		},
		{
			icon: Images.settingMenu,
			title: "Setting"
		},
		{
			icon: Images.profileMenu,
			title: "Profile"
		},
	]

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
										<TouchableOpacity key={index} style={Styles.viewFlat}>
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
