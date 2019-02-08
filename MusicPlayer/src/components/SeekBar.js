import React from 'react'
import { Slider, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class SeekBar extends React.Component {
    render() {
        const { title } = this.props

        return (
            <View style={styles.container}>
                <View><Text style={styles.time}>00:00</Text></View>
                <View><Slider
                    style={styles.slider}
                    minimumTrackTintColor={'#1abc9ca0'}
                    maximumTrackTintColor={'#fff'}
                /></View>
                <View><Text style={styles.time}>04:03</Text></View>
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
        width: 280
    }

})