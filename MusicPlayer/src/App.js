import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header'
import AlbumArt from './components/AlbumArt'
import TrackDetails from './components/TrackDetails'

import SeekBar from './components/SeekBar'
import PlaybackControls from './components/PlaybackControls'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Playlist Marrota'} />
        <AlbumArt />
        <TrackDetails musicName={'Be yourself'} artistName={'Audioslave'} />
        <SeekBar />
        <PlaybackControls />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})