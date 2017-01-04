import React, {Component} from 'react'
import { View, Text } from 'react-native'

class App extends Component {
  render() {
  const { containerStyle, textStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Hallo</Text>
    </View>
  )
  }
}

const styles = {
  containerStyle: {
    fontSize: 12
  },
  textStyle: {
    marginTop: 10
  }
}

export default App;


