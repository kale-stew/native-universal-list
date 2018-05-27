import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ListView,
  TextInput
} from "react-native";
import { Card } from "../components/common";
import firebase from "firebase";

// components
import NewItem from "../components/NewItem";
import Item from "../components/Item";

class List extends React.Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loggedIn: true,
      title: "",
      stage: "",
      itemDataStore: ds,
      textInput: ""
    };

    this.itemsRef = this.getRef().child("items");
    this.renderItem = this.renderItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  getRef() {
    return firebase.database().ref();
  }

  componentWillMount() {
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef) {
    itemsRef.on("value", snap => {
      let items = [];
      snap.forEach(child => {
        items.push({
          stage: child.val().stage,
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        itemDataStore: this.state.itemDataStore.cloneWithRows(items)
      });
    });
  }

  handleDelete(item) {
    this.itemsRef.child(item._key).remove();
  }

  handleCheck(item) {
    const { checked } = this.state;
    this.setState({
      checked: !checked
    });
  }

  renderCheck() {
    if (this.state.checked) {
      return (
        <Text style={{ paddingLeft: 5, fontSize: 24, paddingRight: 2 }}>
          ☑︎
        </Text>
      );
    }

    return <Text style={{ paddingLeft: 5, fontSize: 22, padding: 5 }}>☐</Text>;
  }

  renderItem(item) {
    const styles = {
      containerStyle: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 8,
        marginBottom: 3
      },

      labelStyle: {
        flexBasis: "78%",
        color: "black",
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 1
      },

      buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end"
      }
    };

    // handling checks:
    // array of bool, index updates depending on index in that array
    // defaults to false

    return (
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={() => this.handleCheck(item)}>
          {this.renderCheck()}
        </TouchableOpacity>

        <Text style={styles.labelStyle}>{item.title}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={{ fontSize: 22, paddingRight: 5 }}>✎</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleDelete(item)}>
            <Text style={{ fontSize: 22 }}>✗</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView>
          <View style={styles.newItemContainer}>
            <TextInput
              style={styles.newItemInput}
              onChangeText={e => this.setState({ textInput: e })}
              autoCorrect={false}
              placeholder="Add an item to your list"
              value={this.state.textInput}
            />

            <TouchableOpacity
              onPress={() =>
                this.itemsRef.push({ title: this.state.textInput })
              }
            >
              <Text style={styles.newItemLabel}>⏎</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <ListView
              dataSource={this.state.itemDataStore}
              renderRow={this.renderItem}
            />
          </View>

          <View style={styles.logout}>
            <TouchableOpacity
              onPress={() => {
                firebase.auth().signOut();
              }}
            >
              <Text style={{ color: "#386C37" }}>Save & Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  newItemContainer: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  newItemInput: {
    color: "#000",
    paddingLeft: 40,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },

  newItemLabel: {
    fontSize: 20,
    flex: 2,
    paddingLeft: 1,
    paddingRight: 35,
    paddingTop: 10
  },

  containerStyle: {
    flex: 1,
    paddingTop: 40
  },

  logout: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 25
  },

  listContainer: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ddd",
    shadowColor: "#000",
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
};

export default List;

// ><Item>
// // {child.val().title}
// </Item>
