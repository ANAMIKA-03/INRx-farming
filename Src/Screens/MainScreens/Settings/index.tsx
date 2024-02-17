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
import SwitchToggle from "react-native-switch-toggle";
import Styles from './Styles';


export type Props = {
	navigation: any;
};

const Settings = (props: any) => {
	const { navigation } = props;

	const [push, setPush] = useState(false);
	const [sms, setSms] = useState(false);
	const [whatsApp, setWhatsApp] = useState(false);
	const [security, setSecurity] = useState(false);

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
						<Text style={Styles.userTitle}>{`Setting`}</Text>
						<View style={Styles.empty} />
					</View>
				</View>


				{/* Main Content */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.scrollContainer}>

						{/* Push Notification */}
						<View style={Styles.listContainer}>
							<View style={Styles.listWrapper}>
								<View style={Styles.listLeft}>
									<Text style={Styles.listTitle}>{"Push Notification"}</Text>
									<Text style={Styles.descriptionText}>{`Get instant app updates delivered directly to your device.`}</Text>
								</View>
								<SwitchToggle
									switchOn={push}
									onPress={() => setPush(!push)}
									circleColorOff={Colors.White}
									circleColorOn={Colors.White}
									backgroundColorOn='#11A249'
									backgroundColorOff={Colors.Black}
									containerStyle={Styles.mainToogke}
									circleStyle={Styles.circle}
								/>
							</View>
						</View>

						{/* SMS Notification */}
						<View style={Styles.listContainer}>
							<View style={Styles.listWrapper}>
								<View style={Styles.listLeft}>
									<Text style={Styles.listTitle}>{"SMS Notification"}</Text>
									<Text style={Styles.descriptionText}>{`Reliable text alerts, even without an internet connection.`}</Text>
								</View>
								<SwitchToggle
									switchOn={sms}
									onPress={() => setSms(!push)}
									circleColorOff={Colors.White}
									circleColorOn={Colors.White}
									backgroundColorOn='#11A249'
									backgroundColorOff={Colors.Black}
									containerStyle={Styles.mainToogke}
									circleStyle={Styles.circle}
								/>
							</View>
						</View>


						{/* WhatsApp Notification */}
						<View style={Styles.listContainer}>
							<View style={Styles.listWrapper}>
								<View style={Styles.listLeft}>
									<Text style={Styles.listTitle}>{"WhatsApp Notification"}</Text>
									<Text style={Styles.descriptionText}>{`Stay connected through familiar chat interface for personalized massages.`}</Text>
								</View>
								<SwitchToggle
									switchOn={whatsApp}
									onPress={() => setWhatsApp(!push)}
									circleColorOff={Colors.White}
									circleColorOn={Colors.White}
									backgroundColorOn='#11A249'
									backgroundColorOff={Colors.Black}
									containerStyle={Styles.mainToogke}
									circleStyle={Styles.circle}
								/>
							</View>
						</View>


						{/* Security Setting */}
						<View style={Styles.listContainer}>
							<View style={Styles.listWrapper}>
								<View style={Styles.listLeft}>
									<Text style={Styles.listTitle}>{"Security Setting"}</Text>
									<Text style={Styles.descriptionText}>{`Stay connected through familiar chat interface for personalized massages.`}</Text>
								</View>
								<SwitchToggle
									switchOn={security}
									onPress={() => setSecurity(!push)}
									circleColorOff={Colors.White}
									circleColorOn={Colors.White}
									backgroundColorOn='#11A249'
									backgroundColorOff={Colors.Black}
									containerStyle={Styles.mainToogke}
									circleStyle={Styles.circle}
								/>
							</View>
						</View>


					</View>
				</ScrollView>

			</View>
		</SafeAreaView>
	);
}

export default Settings;
