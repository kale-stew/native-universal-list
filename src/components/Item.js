import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Card } from './common';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }

        this._onPressCheckbox.bind( this );
    }

    _onPressCheckbox(checked) {
        

        // change icon from ☐ to ☑︎
        switch(checked) {
            case checked: {
                return <Text style={{ paddingLeft: 5, fontSize: 20, paddingTop: 3 }}>☑︎</Text>;
            }

            case (!checked): {
                return <Text style={{ paddingLeft: 5, fontSize: 20, paddingTop: 3 }}>☐</Text>;
            }

            default: {
                return <Text style={{ paddingLeft: 5, fontSize: 20, paddingTop: 3 }}>☐</Text>;
            }
        }
    }

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity>
                    <Text style={{ paddingLeft: 5, fontSize: 20, paddingTop: 3 }}>☐</Text>
                </TouchableOpacity>
                <Text style={styles.labelStyle}>{/*{props.children}*/}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, paddingRight: 5 }}>✎</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>✗</Text>
                    </TouchableOpacity>
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
        flexBasis: '78%'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};

export default Item;