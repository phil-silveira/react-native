import React from 'react'
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
    static navigateOptions = {
        title: 'Home Page'
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>Home ...</Text>
                <Button title='Go to Game' onPress={() => { navigate('Game') }} />
            </View>
        )
    }
}
