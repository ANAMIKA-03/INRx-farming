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
import FollowPopup from '../../../Components/FollowPopup';

export type Props = {
	navigation: any;
};

const About = (props: any) => {
	const { navigation } = props;
	const [openSocial, setOpenSocial] = useState(false)


	const closeSocial = () => {
		setOpenSocial(false)
	}

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
						<Text style={Styles.userTitle}>{`About`}</Text>
						<View style={Styles.empty} />
					</View>
				</View>


				{/* Main Content */}
				<View style={Styles.bottomWrapper}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={Styles.scrollContainer}>

							<View style={Styles.dataContainer}>

								<View style={Styles.aboutWrapper}>
									<Image source={Images.logo} style={Styles.aboutLogo} />
								</View>
								<Text style={Styles.versionTitle}>{`v2.76.1 (build 1)`}</Text>

							</View>


							<TouchableOpacity style={Styles.listContainer}>
								<View style={Styles.listWrapper}>
									<Image source={Images.document} style={Styles.docIcon} />
									<Text style={Styles.listTitle}>{"Services Agreement"}</Text>
								</View>
								<Ionic
									name={"chevron-forward"}
									size={14}
									style={Styles.rightIcon} />
							</TouchableOpacity>

							{/* Like */}
							<TouchableOpacity onPress={() => { setOpenSocial(true) }}
								style={Styles.listContainer}>
								<View style={Styles.listWrapper}>
									<Image source={Images.like} style={Styles.likeIcon} />
									<Text style={Styles.listTitle}>{"Follows us"}</Text>
								</View>
								<Ionic
									name={"chevron-forward"}
									size={14}
									style={Styles.rightIcon} />
							</TouchableOpacity>

							{/* Share */}
							<TouchableOpacity style={Styles.listContainer}>
								<View style={Styles.listWrapper}>
									<Image source={Images.share} style={Styles.shareIcon} />
									<Text style={Styles.listTitle}>{"Share INRx App"}</Text>
								</View>
								<Ionic
									name={"chevron-forward"}
									size={14}
									style={Styles.rightIcon} />
							</TouchableOpacity>

							{/* Check Updates */}
							<TouchableOpacity style={Styles.listContainer}>
								<View style={Styles.listWrapper}>
									<Image source={Images.updateCheck} style={Styles.updateIcon} />
									<Text style={Styles.listTitle}>{"Check for updates"}</Text>
								</View>
								<Ionic
									name={"chevron-forward"}
									size={14}
									style={Styles.rightIcon} />
							</TouchableOpacity>

						</View>
					</ScrollView>
					{
						openSocial == true ?
							<FollowPopup open={openSocial} close={closeSocial} />
							: null
					}
				</View>

			</View>
		</SafeAreaView>
	);
}

export default About;
