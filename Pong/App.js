import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/HomeScreen'
import GameScreen from './src/GameScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Game: {
    screen: GameScreen
  }
},
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);

