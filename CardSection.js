import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const CardSection = (props) => {
    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
  }


const styles = {
    containerStyle: {
       borderBottomWidth: 10,
       borderBottomColor: '#ffffff',
       backgroundColor: '#ffffff'
    }
}
export default CardSection;