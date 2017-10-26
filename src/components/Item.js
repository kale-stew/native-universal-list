import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Card } from './common';

const Item = (props) => {
    return (
        <View style={styles.containerStyle}>

            <TouchableOpacity>
                <Text style={{ paddingLeft: 5, fontSize: 22, paddingTop: 3 }}>☐</Text>
            </TouchableOpacity>

            <Text style={styles.labelStyle}>{props.children}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 22, paddingRight: 5 }}>✎</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ fontSize: 22 }}>✗</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
        flexBasis: '78%',
        color: 'black',
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 1
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};

export default Item;