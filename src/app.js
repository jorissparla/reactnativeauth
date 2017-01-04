import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm'


class App extends Component {
  
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyDPKnkgEt61iKU0s9weAOpKDagAQEtADQ4',
      authDomain: 'auth-4ff35.firebaseapp.com',
      databaseURL: 'https://auth-4ff35.firebaseio.com',
      storageBucket: 'auth-4ff35.appspot.com',
      messagingSenderId: '180304878263'
    };
  firebase.initializeApp(config);
  }
  
  render() {
  return (
    <View >
      <Header headerText='Authentication' title='Bla'/>
      <LoginForm />
    </View>
  )
  }
}


export default App;


