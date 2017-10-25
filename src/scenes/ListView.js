import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../components/common';

// components
import NewItem from '../components/NewItem';
import Item from '../components/Item';

class ListView extends React.Component {

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView >
                    <NewItem />
                    <Item>
                        {'this'}
                    </Item>
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
}

export default ListView;