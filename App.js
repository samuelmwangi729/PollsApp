import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './Screens/LandingScreen';
import LoginScreen from './Screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './Screens/HomePage';
export default function App() {
  const Screens = createStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Screens.Navigator initialRouteName='landingScreen'>
          <Screens.Screen name="landingScreen" component={LandingScreen} options={{ headerShown: false }} />
          <Screens.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Screens.Screen name="dashboard" component={HomePage} options={{ headerShown: false }} />
        </Screens.Navigator>
      </Provider>
    </NavigationContainer>
  );
}