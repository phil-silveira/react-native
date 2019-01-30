import React from 'react'
import { View, Text, Button } from 'react-native'

export default class GameScreen extends React.Component {
    static navigateOptions = {
        title: 'Game Page'
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>Game ...</Text>
                <Button title='Go to Home' onPress={() => { navigate('Home') }} />
            </View>
        )
    }
}
