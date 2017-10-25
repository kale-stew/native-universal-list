import React from 'react';
import { 
    TextInput, 
    View, 
    Text,
    TouchableOpacity
} from 'react-native';

class NewItem extends React.Component {
    render() {
        return (
            <View style={ styles.containerStyle }>
                <TextInput 
                    style={ styles.inputStyle }
                    autoCorrect={ false }
                    placeholder="Add an item to your list"
                />
                <TouchableOpacity>
                    <Text style={ styles.labelStyle }>⏎</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputStyle: {
        color: '#000',
        paddingLeft: 40,
        fontSize: 18,
        lineHeight: 23,
        flex: 1
    },
    
    labelStyle: {
        fontSize: 15,
        flex: 2,
        paddingRight: 35,
        paddingTop: 10
    }
};

export default NewItem;