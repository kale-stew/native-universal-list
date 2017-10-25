import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { SignedOut, SignedIn } from './router';
import { Spinner } from './components/common';

class App extends React.Component {
    state = {
        loggedIn: null
    };

    // initialize firebase before App.js renders
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCx92Sr3Ap736MpsjDHPFeyH0pF3OMdOfk",
            authDomain: "dont-forget-it-45fc1.firebaseapp.com",
            databaseURL: "https://dont-forget-it-45fc1.firebaseio.com",
            projectId: "dont-forget-it-45fc1",
            storageBucket: "dont-forget-it-45fc1.appspot.com",
            messagingSenderId: '145638025239'   
        });

        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {
        switch( this.state.loggedIn ) {
            case true:
                return (
                    <SignedIn />
                );

            case false:
                return (
                    <SignedOut />
                );

            default: 
                return <View style={{ padding: 150 }}><Spinner size="large" /></View>;
        }
    }

    render() {
        return(
            this.renderContent()
        )
    }
}

export default App;