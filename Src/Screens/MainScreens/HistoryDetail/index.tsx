import React, { useState } from 'react';
import {
	StatusBar,
	View,
	Image,
	Text,
	TouchableOpacity,
	Platform,
	ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';


export type Props = {
	navigation: any;
};

const HistoryDetail = (props: any) => {
	const { navigation } = props;


	return (
		<SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
			<StatusBar barStyle={'dark-content'} />
			<View style={Styles.mainContainer}>

				{/* Header */}
				<View style={Styles.headerContainer}>
					<View style={Styles.headerWrapper}>
						<TouchableOpacity onPress={() => { navigation.goBack() }}>
							<Image source={Images.back} style={Styles.userIcon} />
						</TouchableOpacity>
					</View>
				</View>


				{/* Main Content */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.scrollContainer}>

						<View style={Styles.dataContainer}>
							<Text style={Styles.inrTitle}>{`+3,427.85600591 INRx`}</Text>

							<View style={Styles.leftWrapper}>
								<Ionic
									name={"checkmark-circle"}
									size={20}
									style={Styles.dotIcon} />
								<Text style={Styles.solutionText}>{`Completed`}</Text>
							</View>
						</View>


						<View style={Styles.listContainer}>
							<Text style={Styles.listTitle}>{"Network"}</Text>
						</View>

						<View style={Styles.listContainer}>
							<Text style={Styles.listTitle}>{"Address:"}</Text>
							<Text style={Styles.listDescription}>{`0x824c6aabec19575f369ce63dfcb07159393b4793`}</Text>
						</View>

						<View style={Styles.listContainer}>
							<Text style={Styles.listTitle}>{"Txid:"}</Text>
							<Text style={Styles.listDescription}>{`0038c7013b2570985022c4e4879af96c133bnb744cf39bafa782ce6ff94026d23`}</Text>
						</View>

						<View style={Styles.listContainer}>
							<Text style={Styles.listTitle}>{"Deposit Wallet"}</Text>
							<Text style={Styles.listDescription}>{`Spot Wallet`}</Text>
						</View>

						<View style={Styles.listContainer}>
							<Text style={Styles.listTitle}>{"Date"}</Text>
							<Text style={Styles.listDescription}>{`2024-01-02 09:54:20`}</Text>
						</View>

					</View>
				</ScrollView>

			</View>
		</SafeAreaView>
	);
}

export default HistoryDetail;
