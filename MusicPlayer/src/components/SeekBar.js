import React from 'react'
import { Slider, StyleSheet, Text, View } from 'react-native'

export default class SeekBar extends React.Component {
    render() {
        const { currentDuration, trackDuration } = this.props

        return (
            <View style={styles.container}>
                <View><Text style={styles.time}>{currentDuration}</Text></View>
                <View><Slider
                    style={styles.slider}
                    minimumTrackTintColor={'#1abc9ca0'}
                    maximumTrackTintColor={'#fff'}
                /></View>
                <View><Text style={styles.time}>{trackDuration}</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    time: {
        color: '#fff',
        fontSize: 15,
        opacity: 0.8
    }, slider: {
        width: 250
    }

})