import React from 'react';
import { Dimensions, View, TouchableOpacity, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PDFLoaderProps {
    url: string;
    onClose: () => void;
}

const PDFLoader: React.FC<PDFLoaderProps> = ({ url, onClose }) => {
    const source = { uri: url, cache: true };

    return (
        <View style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 40, right: 20, zIndex: 1 }}>
                <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
            <Pdf
                trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={error => {
                    console.log(error);
                }}
                onPressLink={uri => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
            />
        </View>
    );
};

export default PDFLoader;
