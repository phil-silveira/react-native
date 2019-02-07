import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Header extends React.Component {
    render() {
        const { title } = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity><Image source={require('../img/arrow_down_white.png')} /></TouchableOpacity>
                <View><Text style={styles.title}>{title}</Text></View>
                <TouchableOpacity><Image source={require('../img/menu_white.png')} /></TouchableOpacity>
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
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        color: '#fff',
        fontSize: 20
    }
})