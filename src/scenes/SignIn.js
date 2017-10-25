import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { 
    Card, 
    CardSection, 
    Input, 
    Button, 
    Header 
} from '../components/common';

class SignIn extends React.Component {
    render() {
        return(
            <View style={{ paddingTop: 60, marginLeft: 20, marginRight: 20 }}>
                
                <Image source={ require('../assets/sign-in.png') } style={styles.headerImage}/>

                    <Card>
                        <CardSection><Input label="Email" placeholderText="your_email@gmail.com"/></CardSection>
                        <CardSection><Input label="Password" placeholderText="password" secureTextEntry /></CardSection>
                    </Card>
                    <Card>
                        <CardSection><Button>Log In</Button></CardSection>
                    </Card>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>New here?</Text>
                        <TouchableOpacity>
                            <Text> Sign Up </Text>
                        </TouchableOpacity>
                    </View>

            </View>
        )
    }
};

const styles = {
    headerImage: {
        width: 335,
        height: 110,
        resizeMode: 'stretch'
    },

    footerImage: {
        width: 330,
        height: 150
    }
}

export default SignIn;