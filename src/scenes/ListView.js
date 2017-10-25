import React from 'react';
import { 
    View, 
    ScrollView, 
    TouchableOpacity, 
    Text 
} from 'react-native';
import firebase from 'firebase';

// components
import NewItem from '../components/NewItem';
import Item from '../components/Item';

class ListView extends React.Component {
    state = {
        loggedIn: true
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView >
                    <NewItem />
                    <Item></Item>
                </ScrollView>
                <View style={styles.logout}>
                    <TouchableOpacity onPress={ () =>
                        {firebase.auth().signOut()}
                    }>
                        <Text style={{ color: '#386C37' }}>Save & Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = {
    containerStyle: {
        flex: 1,
        paddingTop: 40
    },

    logout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center', 
        paddingBottom: 25
    }
}

export default ListView;