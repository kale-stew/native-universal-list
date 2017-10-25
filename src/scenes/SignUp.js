import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { 
    Card, 
    CardSection, 
    Input, 
    Button, 
    Header 
} from '../components/common';

import SignIn from './SignIn';

class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Sign Up'
    };
    
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                
                <Image source={ require('../assets/sign-up.png') } style={styles.headerImage}/>

                    <Card>
                        <CardSection><Input label="First Name" placeholderText="Kylie"/></CardSection>
                        <CardSection><Input label="Last Name" placeholderText="Stewart"/></CardSection>
                        <CardSection><Input label="Email" placeholderText="your_email@gmail.com"/></CardSection>
                        <CardSection><Input label="Password" placeholderText="password" secureTextEntry /></CardSection>
                    </Card>
                    <Card>
                        <View style={styles.buttonCard}>
                            <Button>Let's get started!</Button>
                        </View>
                    </Card>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>or</Text>
                        <TouchableOpacity onPress={ () => 
                            navigate('SignIn', {name: SignIn} )}
                        >
                            <Text> Sign In</Text>
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

    buttonCard: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#4D9B69',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default SignUp;