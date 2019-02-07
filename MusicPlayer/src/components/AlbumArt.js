import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default class AlbumArt extends React.Component {
    render() {
        // const image = (this.props.image) ? require(`../img/${this.props.image}`) : require('../img/no_image.png')
        const image = require('../img/audioslave_revelations.png')

        return (
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 330,
        height: 330,
        resizeMode: 'contain'
    }
})