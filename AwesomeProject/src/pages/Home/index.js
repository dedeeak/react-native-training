/* eslint-disable react-native/no-inline-styles */

// import React from 'react';
// import {Button} from 'react-native';
// const Home = ({navigation}) => {
//   return (
//     <>
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </>
//   );
// };
// export default Home;

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';
import styles from "../../assets/styles";
import { mutate } from "../../services/graphql/api";
import { gql } from "apollo-boost";

import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
    const getToken = async (key) => {
        console.log("Get token: " + key);
        return await AsyncStorage.getItem(key);
    }
    const cekToken = async () => {
        let tokenResult = await getToken('login_token');
        console.log('Get token result: ' + JSON.stringify(tokenResult));
        if ( tokenResult !== null ) {
            navigation.navigate('Profile');
        }
    }
    cekToken();

    const [username, setUsername] = useState('tomo@icube.us');//useState(Platform.OS === 'ios' ? '' : null);
    const [password, setPassword] = useState('Admin123');//useState(Platform.OS === 'ios' ? '' : null);

    const setToken = async (key, value) => {
        console.log("Set token: " + value);
        return await AsyncStorage.setItem(key, value);
    }
    
    const postLogin = () => {
        let schema = gql`
            mutation generateCustomerTokenCustom( $email: String!, $pass: String! ) {
                generateCustomerTokenCustom( username: $email, password: $pass) {
                    token
                }
            }
        `;
        let params = { email: username, pass: password };

        mutate( schema, params ).then( (res) => {
            const { data } = res;
            const user = data.generateCustomerTokenCustom;
            console.log(user.token);
            if (user.token) {
                setToken('login_token', user.token);
                navigation.navigate('Profile');
            }
        });
    }

    return (
        <>
        <SafeAreaView>
            <ScrollView>
                <View style={styles.wrapper}>
                    <Text>Username</Text>
                    <TextInput 
                        value="tomo@icube.us"
                        style={styles.textInput}
                        onChangeText={ (text) => {setUsername(text); }} />
                    <View />
                    <Text>Password</Text>
                    <TextInput 
                        value="Admin123"
                        style={styles.textInput}
                        onChangeText={ (text) => {setPassword(text); }}
                        secureTextEntry={true} />
                    <View />
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={ postLogin }>
                            <Text style={styles.textLoginButton}>Login Bro</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    );
};
export default Home;