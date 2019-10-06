/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['work', 'swim', 'study', 'sleep', 'run']
    };
  }

  render() {
    return (
      <ScrollView>
        <View>
          {(this.state.list || []).map(item => (
            <Text style={styles.textList} key={item}>
              {item}
            </Text>
          ))}
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
  }
});
