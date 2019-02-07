import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class TrackDetails extends React.Component {
    render() {
        const { musicName, artistName } = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image
                        style={styles.secundaryButton}
                        source={require('../img/add_white.png')} />
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                    <View><Text style={styles.musicName}>{musicName}</Text></View>
                    <View><Text style={styles.artistName}>{artistName}</Text></View>
                </View>
                <TouchableOpacity>
                    <Image
                        style={styles.secundaryButton}
                        source={require('../img/more_white.png')} />
                </TouchableOpacity>
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
        paddingLeft: 25,
        paddingRight: 25
    },
    detailsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    musicName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    artistName: {
        fontSize: 15,
        color: '#aaa'
    },
    secundaryButton: {
        width: 25,
        height: 25,
        borderColor: '#fff',
        borderWidth: 1.5,
        borderRadius: 50,
        opacity: 0.7
    }
})