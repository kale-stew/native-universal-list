import React from 'react';
import firebase from 'firebase';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { 
    Card, 
    CardSection, 
    Input, 
    Button, 
    Header,
    Spinner
} from '../components/common';

import SignIn from './SignIn';

class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        loading: false
    }

    static navigationOptions = {
        title: 'Sign Up'
    };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then(this.onSignUpSuccess.bind( this ))
        .catch(this.onSignUpFail.bind( this ));
    }

    onSignUpSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onSignUpFail() {
        this.setState({
            password: '',
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <View style={{ margin: 20 }}><Spinner size="small" /></View>;
        }

        return (
            <View style={styles.buttonCard}>
                <Button onPress={ this.onButtonPress.bind( this ) }>
                    Let's get started!</Button>
            </View>
        );
    }
    
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

                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>

                    <Card>
                        {this.renderButton()}
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
    },

    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
        padding: 2,
        marginTop: 6
    }
}

export default SignUp;