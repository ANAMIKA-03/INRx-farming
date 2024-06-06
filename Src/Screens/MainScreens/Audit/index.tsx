import React, { useState } from 'react';
import {
    StatusBar,
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PDFLoader from '../../../Components/PDFLoader';

export type Props = {
    navigation: any;
};

const Audit = (props: any) => {
    const { navigation } = props;
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

    const DATA = [
        {
            id: '1',
            icon: Images.document,
            name: "White Paper",
            url: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        },
        {
            id: '2',
            icon: Images.document,
            name: "Roc",
            url: '',
        },
        {
            id: '3',
            icon: Images.document,
            name: "Smart Contract Audit",
            url: '',
        },
        {
            id: '4',
            icon: Images.document,
            name: "GstIN",
            url: '',
        },
        {
            id: '5',
            icon: Images.document,
            name: "Pan",
            url: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        },
        {
            id: '6',
            icon: Images.document,
            name: "Minting Report",
        },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleItemPress = (item: any) => {
        if (item.url) {
            setSelectedPDF(item.url);
        } else {
            navigation.navigate("ProductDetail", {
                product: item
            });
        }
    };

    const handleClosePDF = () => {
        setSelectedPDF(null);
    };

    return (
        <SafeAreaView style={Styles.safeAreaContainer}>
            <StatusBar barStyle={'dark-content'} />
            {selectedPDF ? (
                <PDFLoader url={selectedPDF} onClose={handleClosePDF} />
            ) : (
                <View style={Styles.mainContainer}>

                    <View style={Styles.headerContainer}>
                        <View style={Styles.headerWrapper}>
                            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                <Image source={Images.back} style={Styles.userIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

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
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    scrollEnabled={false}
                                    numColumns={2}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity key={index}
                                            onPress={() => handleItemPress(item)}
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
                            <TouchableOpacity style={Styles.uploadButton}>
                                <Text style={Styles.uploadButtonText}>Choose File</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            )}
        </SafeAreaView>
    );
}

export default Audit;
