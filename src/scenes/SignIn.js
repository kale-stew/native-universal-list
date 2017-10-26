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

import SignUp from './SignUp';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    static navigationOptions = {
        title: 'Sign In'
    };
    
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(this.onLoginSuccess.bind( this ))
            .catch(this.onLoginFail.bind( this ));
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
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
                    Log In</Button>
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ paddingTop: 20, marginLeft: 20, marginRight: 20 }}>
                
                <Image source={ require('../assets/sign-in.png') } style={styles.headerImage}/>

                    <Card>
                        <CardSection>
                            <Input 
                                label="Email" 
                                placeholderText="your_email@gmail.com"
                                value={ this.state.email }
                                onChangeText={ text => this.setState({ email: text }) }
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="Password" 
                                placeholderText="*********" 
                                value={ this.state.password }
                                onChangeText={ text => this.setState({ password: text })}
                                secureTextEntry 
                            />
                        </CardSection>
                    </Card>

                    <Text style={styles.errorStyle}>
                        {this.state.error}
                    </Text>

                    <Card>
                        {this.renderButton()}
                    </Card>

                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>New here?</Text>
                        <TouchableOpacity onPress={ () =>
                            navigate('SignUp', { name: SignUp }) }>
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
        resizeMode: 'stretch',
        marginBottom: 14
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

export default SignIn;
