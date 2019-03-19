import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Card = (props) => {
    return (
      <View style={styles.containerStyle}>
            {props.children}
      </View>
    );
  }


const styles = {
    containerStyle: {
        
    }
}
export default Card;