import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from './src/components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})