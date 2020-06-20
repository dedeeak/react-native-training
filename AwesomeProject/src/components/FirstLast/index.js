import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from '../../assets/styles.js';

const FirstLast = ({callbackFirst}) => {
    //const [username, setUsername] = useState('');
    return (
        <View style={[styles.wrapper]}>
            <Text>Username</Text>
            <TextInput 
                style={[styles.textInput]}
                //onChangeText={(text) => {[setUsername(text), callbackFirst(text)]}}>
                onChangeText={(text) => {[callbackFirst(text)]}}>
            </TextInput>
            <Text>Password</Text>
            <TextInput style={[styles.textInput,styles.default]}></TextInput>
        </View>
    )
}

export default FirstLast;