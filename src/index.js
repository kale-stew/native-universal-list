import React from 'react';

import { SignedOut, SignedIn } from './router';

import ListView from './scenes/ListView';
import SignUp from './scenes/SignUp';
import SignIn from './scenes/SignIn';

class App extends React.Component {
    render() {
        return(
            <SignedOut />
        )
    }
}

export default App;