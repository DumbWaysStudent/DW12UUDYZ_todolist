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
      value: '',
      listtodo: [
        {
          task: 'work'
        },
        {
          task: 'sleep'
        },
        {
          task: 'study'
        },
        {
          task: 'run'
        },
        {
          task: 'swim'
        }
      ]
    };
  }
  onAddItem = () => {
    if (this.state.value === '') {
      Alert.alert('Peringatan', 'Isi Text Input Dulu');
    } else {
      this.setState(() => {
        var joined = this.state.listtodo.concat(this.state.value);
        this.setState({ listtodo: joined });
        this.setState({ value: '' });
      });
    }
  };
  onDeleteItem = i => {
    this.setState(state => {
      const listtodo = state.listtodo.filter((item, j) => i !== j);
      return {
        listtodo
      };
    });
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
                onChangeText={text =>
                  this.setState({ value: [{ task: text }] })
                }
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
            {(this.state.listtodo || []).map((item, index) => {
              return (
                <View key={index} style={styles.containerViewList2}>
                  <Text style={styles.textList}>{item.task}</Text>
                  <Button
                    style={styles.buttonDelete}
                    title="Delete"
                    onPress={() => {
                      this.onDeleteItem(index);
                    }}
                  />
                </View>
              );
            })}
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
    height: 44
  },
  containerInput: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerViewList2: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between'
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
  },
  buttonDelete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
