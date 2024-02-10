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
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';


export type Props = {
	navigation: any;
};

const History = (props: any) => {
	const { navigation } = props;
	const [tab, setTab] = useState(1);

	const HISTORY_DATA = [
		{
			title: `USDT`,
			createdAt: `2024-01-19 18:29:28 `,
			amount: `2,000`,
			status: `Completed`
		},
		{
			title: `USDT`,
			createdAt: `2024-01-12 17:15:23 `,
			amount: `1,500`,
			status: `Completed`
		},
		{
			title: `USDT`,
			createdAt: `2024-01-12 15:29:20 `,
			amount: `2,000`,
			status: `Completed`
		},
		{
			title: `RAY`,
			createdAt: `2024-01-02 13:01:01`,
			amount: `1,023.7946`,
			status: `Completed`
		},
		{
			title: `USDT`,
			createdAt: `2024-01-02 09:54:20`,
			amount: `3,427.85600591`,
			status: `Completed`
		},
		{
			title: `USDT`,
			createdAt: `2024-12-28 13:11:56`,
			amount: `740`,
			status: `Completed`
		},
		{
			title: `BUSD `,
			createdAt: `22023-12-21 23:41:10`,
			amount: `14.73657197`,
			status: `Completed`
		},
		{
			title: `USDT`,
			createdAt: `2024-01-02 09:54:20`,
			amount: `3,427.85600591`,
			status: `Completed`
		},
		{
			title: `USDT`,
			createdAt: `2024-12-28 13:11:56`,
			amount: `740`,
			status: `Completed`
		},
		{
			title: `BUSD `,
			createdAt: `22023-12-21 23:41:10`,
			amount: `14.73657197`,
			status: `Completed`
		},
	]

	const selectTab = (num: any) => {
		setTab(num);
	};

	return (
		<SafeAreaView style={Styles.safeAreaContainer}>
			<StatusBar barStyle={'dark-content'} />
			<View style={Styles.mainContainer}>

				{/* Header */}
				<View style={Styles.headerContainer}>
					<View style={Styles.headerWrapper}>
						<TouchableOpacity onPress={() => { navigation.goBack() }}>
							<Image source={Images.back} style={Styles.userIcon} />
						</TouchableOpacity>
						<Text style={Styles.userTitle}>{`Transaction History`}</Text>
						<View style={Styles.empty} />
					</View>
				</View>
				{/* Tabs Data */}

				<View style={Styles.flexNotification}>
					<TouchableOpacity onPress={() => selectTab(1)}>
						<Text style={[tab == 1 ? Styles.innerActiveTab : Styles.innerInActiveTab]}>{'Deposit'}</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => selectTab(2)}>
						<Text style={[tab == 2 ? Styles.innerActiveTab : Styles.innerInActiveTab]}>{'Withdrawals'}</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => selectTab(3)}>
						<Text style={[tab == 3 ? Styles.innerActiveTab : Styles.innerInActiveTab]}>{'Buy'}</Text>
					</TouchableOpacity>
				</View>
				<View style={Styles.line} />

				{/* Main Content */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.scrollContainer}>

						<View style={Styles.dataContainer}>
							<View style={Styles.tabContainer}>
								<Text style={Styles.inrTitle}>{`INRx`}</Text>
							</View>
							<View style={Styles.leftWrapper}>
								<Text style={Styles.depositText}>{`Deposits not arrived?`}</Text>
								<Text style={Styles.solutionText}>{`Check solutions here >  `}</Text>
							</View>
						</View>

						{
							HISTORY_DATA?.map((item, keyID) => {
								return (
									<TouchableOpacity key={keyID}
										onPress={() => { navigation.navigate("HistoryDetail") }}
										style={Styles.listContainer}>
										<View>
											<Text style={Styles.listTitle}>{item?.title}</Text>
											<Text style={Styles.listDescription}>{item?.createdAt}</Text>
										</View>
										<View>
											<Text style={Styles.priceTitle}>{item?.amount}</Text>
											<View style={Styles.completeWrap}>
												<Ionic
													name={"ellipse"}
													size={6}
													style={Styles.dotIcon} />
												<Text style={Styles.completeText}>{item?.status}</Text>
											</View>
										</View>
									</TouchableOpacity>
								)
							})
						}

					</View>
				</ScrollView>

			</View>
		</SafeAreaView>
	);
}

export default History;
