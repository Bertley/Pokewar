import React, { Component } from "react"; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import LoginScreen from './src/screens/LoginScreen'
import TeamSelectionScreen from './src/screens/TeamSelectionScreen'
import BattleScreen from './src/screens/BattleScreen'

// Store
import { Provider } from "react-redux"; 
import { compose, createStore, applyMiddleware } from "redux"; 
import reducers from "./src/reducers"; 

// import Reactotron from "reactotron-react-native"; 
// import { reactotronRedux } from 'reactotron-redux'; 


// // then add it to the plugin list
// Reactotron.configure({host: "192.168.254.108"})
//     .useReactNative()
//     .use(reactotronRedux()) //  <- here i am!
//     .connect() //Don't forget about me!

// const store = Reactotron.createStore(reducers, {}, compose())

const store = createStore(reducers); // replace the above code with this one on deployment

// console.ignoredYellowBox = ["Setting a timer"];

const Stack = createStackNavigator(); 


class Router extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="TeamSelect" component={TeamSelectionScreen}/>
                        <Stack.Screen name="Battle" component={BattleScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        ); 
    }
}

export default Router; 