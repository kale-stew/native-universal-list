import React from 'react';
import { TextInput, View, Text } from 'react-native';

class NewItem extends React.Component {
    render() {
        return (
            <View style={ styles.containerStyle }>
                <TextInput 
                    style={ styles.inputStyle }
                    autoCorrect={ false }
                    placeholder="Add an item to your list"
                />
                <Text style={ styles.labelStyle }>⏎</Text>
            </View>
        )
    }
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 40,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    
    labelStyle: {
        fontSize: 18,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default NewItem;