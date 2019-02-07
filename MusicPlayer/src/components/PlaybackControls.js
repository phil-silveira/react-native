import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class PlaybackControls extends React.Component {
    state = {
        playing: false
    }

    render() {
        const { title } = this.props
        const { playing } = this.state
        playButtonImage = (playing) ? require('../img/pause_white.png') : require('../img/play_arrow_white.png')

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.secundaryButton} source={require('../img/shuffle_white.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.primaryButton} source={require('../img/skip_previous_white.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.setState({ playing: !this.state.playing }) }}>
                    <Image style={styles.playButton} source={playButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.primaryButton} source={require('../img/skip_next_white.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.secundaryButton} source={require('../img/repeat_white.png')} />
                </TouchableOpacity>
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
    playButton: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#fff',
        width: 60,
        height: 60
    },
    primaryButton: {
        width: 45,
        height: 45
    },
    secundaryButton: {
        width: 25,
        height: 25,
        opacity: 0.7
    }
})