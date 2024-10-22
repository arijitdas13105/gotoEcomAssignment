import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MovieListScreen from './screens/MovieListScreen'
import ShortlistedMoviesScreen from './screens/ShortlistedMoviesScreen'
import store from './store/store'
import { Provider } from 'react-redux'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const App = () => {
  const Tab=createBottomTabNavigator()
  return (
    <Provider store={store}>

        <NavigationContainer>
     <Tab.Navigator 
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'MovieListScreen') {
          iconName = focused
            ? 'local-movies'
            : 'local-movies';
        } else if (route.name === 'ShortlistedMoviesScreen') {
          iconName = focused ? 'app-shortcut' :  'app-shortcut';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
     >
      <Tab.Screen name='MovieListScreen' component={MovieListScreen} options={{tabBarLabel:"Movies",headerShown:false}} />
      <Tab.Screen name='ShortlistedMoviesScreen' component={ShortlistedMoviesScreen}  options={{ tabBarLabel: 'Shortlist',headerShown:false }} />
     </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  
  )
}

export default App