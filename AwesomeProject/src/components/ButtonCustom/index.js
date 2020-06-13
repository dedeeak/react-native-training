import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles.js';

const ButtonCustom = ({type}) => {
    const [username, setUsername] = useState('');
    return (
        <View style={[styles.wrapper]}>
            <TouchableOpacity
                style={styles.buttonLogin}
                autoCompleteType="password"
                secureTextEntry={true}>
                <Text style={[styles.textLoginButton]}>{type}</Text>
            </TouchableOpacity>
            <Text>{username}</Text>
        </View>
    )
}

export default ButtonCustom;