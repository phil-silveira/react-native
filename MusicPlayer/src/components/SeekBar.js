import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class SeekBar extends React.Component {
    render() {
        const { title } = this.props

        return (
            <View style={styles.container}>
                <View><Text style={styles.title}>SeekBar</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        borderLeftWidth: 5,
        borderRightWidth: 5
    },
    title: {
        color: '#fff',
        fontSize: 20
    }
})