import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm'


class App extends Component {
  state =  { loggedIn: null}

  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyDPKnkgEt61iKU0s9weAOpKDagAQEtADQ4',
      authDomain: 'auth-4ff35.firebaseapp.com',
      databaseURL: 'https://auth-4ff35.firebaseio.com',
      storageBucket: 'auth-4ff35.appspot.com',
      messagingSenderId: '180304878263'
    };
  firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;


