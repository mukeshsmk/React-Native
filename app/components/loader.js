import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'

export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})