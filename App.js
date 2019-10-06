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
  Alert,
  CheckBox
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      listtodo: [
        {
          task: 'work',
          done: false
        },
        {
          task: 'sleep',
          done: false
        },
        {
          task: 'study',
          done: false
        },
        {
          task: 'run',
          done: false
        },
        {
          task: 'swim',
          done: false
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
                  this.setState({ value: [{ task: text, done: false }] })
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
                <View key={index} style={styles.containerViewList}>
                  <View style={styles.containerViewList1}>
                    <CheckBox
                      checked={!!item.done}
                      onPress={() =>
                        this.setState(state => {
                          const checkedDefault = { ...state.checkedDefault };
                          checkedDefault[item] = !checkedDefault[item];
                          return { checkedDefault };
                        })
                      }
                    />
                    <Text style={styles.textList}>{item.task}</Text>
                  </View>
                  <View style={styles.containerViewList2}>
                    <Button
                      style={styles.buttonDelete}
                      title="Delete"
                      onPress={() => {
                        this.onDeleteItem(index);
                      }}
                    />
                  </View>
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
  containerViewList: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerViewList1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerViewList2: {
    justifyContent: 'center'
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
