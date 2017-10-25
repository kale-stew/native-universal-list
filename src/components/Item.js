import React from 'react';
import { View, Text } from 'react-native';
import { Header, Card } from './common';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <Text style={{ paddingLeft: 5 }}>❑</Text>
                <Text style={styles.labelStyle}>{/*{props.children}*/}</Text>
                <View style={styles.buttonContainer}>
                    <Text>✎</Text>
                    <Text>✂︎</Text>
                </View>
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },

    labelStyle: {
        flexBasis: '85%'
    },

    buttonContainer: {
        flexDirection: 'row'
    }
};

export default Item;