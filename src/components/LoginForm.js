import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }
  render() {
    const { containerStyle, emailStyle } = styles
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
          <Text>{`${this.state.email}/${this.state.password}`}</Text>
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
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
  }
}

export default LoginForm;
