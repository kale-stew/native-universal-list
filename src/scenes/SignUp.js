import React from 'react';
import { View } from 'react-native';
import { Card, CardSection, Input, Button, Header } from '../components/common';

class SignUp extends React.Component {
    render() {
        return(
            <View style={{ paddingTop: 60, marginLeft: 20, marginRight: 20 }}>
                <Card>
                    <CardSection><Input label="First Name" placeholderText="Kylie"/></CardSection>
                    <CardSection><Input label="Last Name" placeholderText="Stewart"/></CardSection>
                    <CardSection><Input label="Email" placeholderText="your_email@gmail.com"/></CardSection>
                    <CardSection><Input label="Password" placeholderText="password" secureTextEntry /></CardSection>
                </Card>
                <Card>
                    <CardSection><Button>Click me</Button></CardSection>
                </Card>
            </View>
        )
    }
};

export default SignUp;