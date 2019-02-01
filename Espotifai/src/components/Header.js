import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity><Image source={require('../img/arrow_down.png')} /></TouchableOpacity>
                <View><Text>Title</Text></View>
                <TouchableOpacity><Image source={require('../img/menu_music.png')} /></TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})