/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Alert
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['work', 'swim', 'study', 'sleep', 'run'],
      value: ''
    };
  }
  onAddItem = () => {
    if (this.state.value === '') {
      Alert.alert('Isi Text Input Dulu');
    } else {
      this.setState(() => {
        var joined = this.state.list.concat(this.state.value);
        this.setState({ list: joined });
        this.setState({ value: '' });
      });
    }
  };

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.containerInput}>
            <View>
              <TextInput
                placeholder="New ToDo"
                style={styles.textInputCustom}
                ref={input => {
                  this.textInput = input;
                }}
                onChangeText={text => this.setState({ value: text })}
                value={this.state.value}
                type="text"
              />
            </View>
            <View style={styles.containerButton}>
              <Button
                style={styles.buttonCustom}
                title="Add"
                onPress={() => {
                  this.onAddItem();
                }}
              />
            </View>
          </View>
          <View style={styles.containerList}>
            {(this.state.list || []).map(item => (
              <Text style={styles.textList} key={item}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textList: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1
  },
  containerInput: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButton: {
    paddingLeft: 10
  },
  containerList: {
    padding: 10
  },
  textInputCustom: {
    padding: 10,
    height: 35,
    width: 270,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonCustom: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
