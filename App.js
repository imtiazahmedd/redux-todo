

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Counter from './App/Src/Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Counters from './App/Redux/Reducer'

const store = createStore(Counters);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <Counter/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
