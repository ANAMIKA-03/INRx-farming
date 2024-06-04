import React, { useState } from 'react';
import {
	StatusBar,
	View,
	Image,
	Text,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';
import Modal from 'react-native-modal';
import DocumentPicker from 'react-native-document-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type Props = {
	navigation: any;
};

const Audit = (props: any) => {
	const { navigation } = props;

	const [isModalVisible, setModalVisible] = useState(false);

	const DATA = [
		{
			id: '1',
			icon: Images.document,
			name: "White Paper",
		},
		{
			id: '2',
			icon: Images.document,
			name: "Roc",
		},
		{
			id: '3',
			icon: Images.document,
			name: "Smart Contract Audit",
		},
		{
			id: '4',
			icon: Images.document,
			name: "GstIN",
		},
		{
			id: '5',
			icon: Images.document,
			name: "Pan",
		},
		{
			id: '6',
			icon: Images.document,
			name: "Minting Report",
		},
	];

	const handleFilePicker = async () => {
		try {
			const res = await DocumentPicker.pick({
				type: [DocumentPicker.types.pdf],
			});
			console.log(res);
		} catch (err) {
			if (DocumentPicker.isCancel(err)) {
			} else {
				throw err;
			}
		}
	};

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
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
					</View>
				</View>

				{/* Main Content */}
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={Styles.scrollContainer}>

						<View style={Styles.dataContainer}>
							<View style={Styles.aboutWrapper}>
								<Image source={Images.logo} style={Styles.aboutLogo} />
							</View>
							<Text style={Styles.versionTitle}>{`Legal Documents`}</Text>
						</View>

						<View style={Styles.mainFlat}>
							<FlatList
								data={DATA}
								keyExtractor={(item, index) => index.toString()}
								// style={Styles.mainFlat}
								showsVerticalScrollIndicator={false}
								showsHorizontalScrollIndicator={false}
								scrollEnabled={false}
								numColumns={2}
								renderItem={({ item, index }) => (
									<TouchableOpacity key={index}
										onPress={() => {
											if (item.name === "White Paper" || "Pan" || "Minting Report") {
												toggleModal();
											} else {
												navigation.navigate("ProductDetail", {
													product: item
												});
											}
										}}
										style={Styles.viewFlat}>
										<Image source={item?.icon} style={Styles.flatIcon} />
										<Text style={Styles.iconTitle}>{`${item?.name}`}</Text>
									</TouchableOpacity>
								)}
							/>
						</View>

					</View>
				</ScrollView>

			
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
					<View style={Styles.modalContainer}>
						<TouchableOpacity onPress={toggleModal} style={Styles.closeIcon}>
							<Ionicons name="close" size={30} color={Colors.Green} />
						</TouchableOpacity>
						<Text style={Styles.modalTitle}>Upload Document</Text>
						<TouchableOpacity onPress={handleFilePicker} style={Styles.uploadButton}>
							<Text style={Styles.uploadButtonText}>Choose File</Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		</SafeAreaView>
	);
}

export default Audit;
