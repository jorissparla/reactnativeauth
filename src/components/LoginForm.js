import React, {Component} from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({error: '', loading: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(()=> this.onLoginSuccess.bind(this))
      .catch(()=> {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(()=> this.onLoginSuccess.bind(this))
          .catch((err)=> {
            this.onLoginFail.bind(this)
          })
      })

  }

 onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess () {
    this.setState({
      email: '', 
      password: '', 
      error: '', 
      loading: false
    })
  }
  renderButton () {
    if (this.state.loading) {
      return <Spinner />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }
  render() {
    const { containerStyle, emailStyle, errorStyle } = styles
    return (
      <Card>
        <CardSection>
          <Input 
            onChangeText={email=> this.setState({email})}
            value={this.state.email}
            label='email'
            placeholder='user@gmail.com'
            />
        </CardSection>

        <CardSection>
          <Input 
            onChangeText={password=> this.setState({password})}
            value={this.state.password}
            label='password'
            secureTextEntry={true}
            />
        </CardSection>
        <CardSection>
          <Text style={errorStyle}>{this.state.error}</Text>
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  containerStyle: {
    fontSize: 12
  },
  emailInputStyle: {
    fontSize: 20,
    height: 40,
    width: 220,
    marginLeft: 10
  },
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

export default LoginForm;
