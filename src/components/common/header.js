import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  const { title } = props;
  const { view, text } = styles;
  return (
    <View style={view}>
      <Text style={text }>{props.headerText}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,

  },
  view: {
    backgroundColor:'#ffc600',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    flex:1
  }
});
export default Header;


