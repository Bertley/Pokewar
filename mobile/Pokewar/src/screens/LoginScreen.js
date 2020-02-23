import React, { Component } from "react"; 
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import CustomText from "../components/Text/CustomText"; 

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }; 

    state = {
        username: ""
    }

    login = () => {
        let username = this.state.username; 

        if(username) {
            this.props.navigation.navigate("TeamSelect", {
                username
            }); 
        }; 
    }

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.top}>
                   <Image source={require("../assets/images/pokemon/pikachu.gif")}/>
                    {/* <CustomText styles={styles.h1}>Pokémon Battle</CustomText> */}
                    <CustomText styles={styles.h1}>{this.state.username}</CustomText>
                </View> 

                <View style={styles.loginForm}>
                    <CustomText style={styles.label}>Enter Username</CustomText>
                    <TextInput
                        style={styles.input} 
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                    />
                    
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <CustomText styles={styles.buttonText}>Sign In</CustomText>
                    </TouchableOpacity>
                </View>
            </View>
        ); 
    }
}


const styles = {
    container: {
        flex: 10,
        padding: 20,
        backgroundColor: '#FFF'
    }, 
    top: {
        flex: 4, 
        alignItems: 'center',
        justifyContent: "center"
    }, 
    h1: {
        fontSize: 30, 
        fontWeight: "bold", 
        marginTop: 10 
    }, 
    loginForm: {
        flex: 6, 
        justifyContent: "flex-start"
    }, 
    input: {
        height: 40, 
        borderColor: '#ccc', 
        borderWidth: 1
    }, 
    label: {
        fontSize: 16
    }, 
    button: {
        alignSelf: "center", 
        marginTop: 10, 
        backgroundColor: '#000'
    }, 
    buttonText: {
        fontSize: 18, 
        color: '#05a5d1'
    }
}

export default LoginScreen