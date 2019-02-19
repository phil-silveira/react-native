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
        <Header title={music.album} />
        <AlbumArt image={music.albumArt} />
        <TrackDetails musicName={music.name} artistName={music.artist} />
        <SeekBar currentDuration='01:32' trackDuration={music.duration} />
        <PlaybackControls
          onPrevius={}
          onNext={}
        />
      </View>
    )
  }
}

const music = {
  name: 'Be yourself',
  album: 'Out of Exile',
  albumArt: 'audioslave_revelations.png',
  artist: 'Audioslave',
  duration: '04:55'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})