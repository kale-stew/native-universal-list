import React from 'react';
import { 
    View, 
    ScrollView, 
    TouchableOpacity, 
    Text 
} from 'react-native';
import { Card } from '../components/common';
import firebase from 'firebase';

// components
import NewItem from '../components/NewItem';
import Item from '../components/Item';

class ListView extends React.Component {
    state = {
        loggedIn: true
    }

    render() {
        const items = ['milk', 'butter', 'eggs', 'cheese'];
        const list = items.map( function( item, index ) {
            return <Item key={index}>{item}</Item>;
        })

        return (
            <View style={styles.containerStyle}>
                <ScrollView>
                    <NewItem />
                    <View 
                        style={styles.listContainer}
                    >
                        {list}
                    </View>
                    <View style={styles.logout}>
                        <TouchableOpacity onPress={ () =>
                            {firebase.auth().signOut()}
                        }>
                            <Text style={{ color: '#386C37' }}>Save & Logout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        justifyContent: 'flex-end',
        alignSelf: 'center', 
        paddingTop: 15,
        paddingBottom: 25
    },

    listContainer: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        }, // appears to only have shadow on the bottom
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        // borders against the screen
        marginTop: 10,
        paddingBottom: 12
    }
}

export default ListView;