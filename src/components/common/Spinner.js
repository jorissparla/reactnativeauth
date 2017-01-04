import React, {Component} from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Spinner = ({size}) => {
const { containerStyle, spinnerStyle } = styles
return (
  <View style={spinnerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>
)
}

const styles = {
  containerStyle: {
    
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Spinner };
