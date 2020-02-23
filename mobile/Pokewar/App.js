import React, {Component} from 'react'; 
import {View} from "react-native"; 
import Router from "./Router"; 

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Router/>
            </View>
        )
    }
} 

const styles = {
    container: {
      flex: 1
    }
};