import React from 'react';
import { 
    TextInput, 
    View, 
    Text,
    TouchableOpacity
} from 'react-native';
import firebase from 'firebase';

// var database = firebase.database();

class NewItem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textInput: ''
        }

        this.handleAdd = this.handleAdd.bind( this );
    }

    handleAdd(value) {
        this.itemsRef.push({
            title: value
        });

        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <View style={ styles.containerStyle }>
                <TextInput 
                    style={ styles.inputStyle }
                    onChange={ (e) => this.setState({textInput: e}) }
                    autoCorrect={ false }
                    placeholder="Add an item to your list"
                    value={ this.state.textInput }
                />
                <TouchableOpacity onPress={ () => this.this.update.bind() }>
                    <Text style={ styles.labelStyle }>⏎</Text>
                </TouchableOpacity>
            </View>
        )
    }

    update() {
        this.props.onUpdate( this.refs.myInput.getDOMMode().value )
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
        fontSize: 20,
        flex: 2,
        paddingLeft: 1,
        paddingRight: 35,
        paddingTop: 10
    }
};

export default NewItem;