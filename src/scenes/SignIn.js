import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { 
    Card, 
    CardSection, 
    Input, 
    Button, 
    Header 
} from '../components/common';

import SignUp from './SignUp';

class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign In'
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                
                <Image source={ require('../assets/sign-in.png') } style={styles.headerImage}/>

                    <Card>
                        <CardSection><Input label="Email" placeholderText="your_email@gmail.com"/></CardSection>
                        <CardSection><Input label="Password" placeholderText="password" secureTextEntry /></CardSection>
                    </Card>
                    <Card>
                        <View style={styles.buttonCard}>
                            <Button>Log In</Button>
                        </View>
                    </Card>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>New here?</Text>
                        <TouchableOpacity onPress={ () =>
                            navigate('SignUp', { name: SignUp } ) }>
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

export default SignIn;