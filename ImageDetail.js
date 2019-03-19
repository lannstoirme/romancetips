import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import CallData from './CallData';
import Card from './Card';
import CardSection from './CardSection';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width




const ImageDetail = (props) => {
    return (
        <Card>
            <CardSection>
            </CardSection>
            <CardSection>
                <View style={{flex: 1}}>
                <Image 
                style={styles.outputImageStyle}
                source={{uri: props.imagearray.image}} />
                </View>
            </CardSection>
            <CardSection>

            </CardSection>
        </Card>
         
        
    )
};

const styles = {
    outputImageStyle: {
        flex: 1,
        height: SCREEN_HEIGHT - 350,
        width: SCREEN_WIDTH,
        resizeMode: 'cover',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
}

export default ImageDetail;
