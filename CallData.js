import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';
import ImageDetail from './ImageDetail';

export default class CallData extends React.Component {
  state = { imagearray: [] }

 componentWillMount () {
    axios.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/bazinga-fuqhq/service/pull/incoming_webhook/webhook0')
        .then(response => this.setState({ imagearray: response.data }));
}
  
renderImageArray () {
    return this.state.imagearray.map(imagearray =>
    <ImageDetail key={imagearray.title} imagearray={imagearray}/>
    );
}
  
    render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderImageArray()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});