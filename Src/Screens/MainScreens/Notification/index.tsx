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
import BottomBar from "../../../Navigation/BottomBar";
import { useSelector } from 'react-redux';
import { RootState } from '../../../Services/Redux/store';

export type Props = {
	navigation: any;
};

const Notification = (props: any) => {
	const { navigation } = props;
    const { user } = useSelector((state:RootState)=>state.auth);

	const NOTIFY_DATA = [
		{
			id: "1",
			userPic: Images.user,
			title: `DISCORD`,
			description: `Premium subscription`
		},
		{
			id: "2",
			userPic: Images.user,
			title: `MAILCHIMP`,
			description: `25email sent`
		},
		{
			id: "3",
			userPic: Images.user,
			title: `DROPBOX`,
			description: `12 fileuploaded`
		},
	]

	return (
		<SafeAreaView style={Styles.safeAreaContainer}>
			<StatusBar barStyle={'dark-content'} />
			<View style={Styles.mainContainer}>

				{/* Header */}
				<View style={Styles.headerContainer}>
					<View style={Styles.headerWrapper}>
						<TouchableOpacity style={Styles.leftWrapper}>
							<Image source={Images.user} style={Styles.userIcon} />
							<Text style={Styles.userTitle}>{user.name?user.name:`David`}</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => { navigation.goBack() }}>
							<Image source={Images.back} style={Styles.notifyIcon} />
						</TouchableOpacity>
					</View>
				</View>
				{/* Main Content */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.scrollContainer}>

						{
							NOTIFY_DATA?.map((item, keyID) => {
								return (
									<TouchableOpacity key={keyID} style={Styles.listContainer}>
										<View style={Styles.listInner}>
											<View style={Styles.listLeftWrap}>
												<View style={Styles.listIconWrap}>
													<Image source={item?.userPic} style={Styles.listIcon} />
												</View>
												<View style={Styles.seperateWrap}>
													<Text style={Styles.listTitle}>{item?.title}</Text>
													<Text style={Styles.listDescription}>{item?.description}</Text>
												</View>
											</View>
											<Image source={Images.mail} style={Styles.mailIcon} />
										</View>
									</TouchableOpacity>
								)
							})
						}

					</View>
				</ScrollView>
			</View>
			
			<BottomBar profileTab={true} page={1} navigation={navigation} />
		</SafeAreaView>
	);
}

export default Notification;
