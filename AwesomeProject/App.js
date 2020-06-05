// import React from 'react';
// import { View, Text, Image } from 'react-native';

import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './src/assets/styles.js';

const App = () => {
    return (
        <SafeAreaView>
            <View style={[styles.wrapper]}>
                <Text>Username</Text>
                <TextInput style={[styles.textInput]}></TextInput>
                <Text>Password</Text>
                <TextInput style={[styles.textInput]}></TextInput>
                <TouchableOpacity
                    style={styles.buttonLogin}>
                    <Text style={[styles.textLoginButton]}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default App;
