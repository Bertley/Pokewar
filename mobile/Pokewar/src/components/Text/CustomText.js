import React, { Component } from "react"; 
import { Text } from "react-native"; 

class CustomText extends Component {

    render() {
        const {children, styles} = this.props; 

        return <Text style={styles}>{children}</Text>
    }
}

export default CustomText; 

