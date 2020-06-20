import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles.js';

const Todolist = ({handleTodolist}) => {
    const [activity, setActivity] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = () => {
        const item = {activity, status};
        handleTodolist(item);
    };
    return (
        <View style={[styles.wrapper]}>
            <Text>Aktifitas</Text>
            <TextInput 
                style={[styles.textInput]}
                onChangeText={(text) => setActivity(text)}>
            </TextInput>
            <Text>Status</Text>
            <TextInput 
                style={[styles.textInput,styles.default]}
                onChangeText={(text) => setStatus(text)}>
            </TextInput>
            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => handleSubmit()}>
                <Text style={[styles.textLoginButton]}>Simpan</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Todolist;