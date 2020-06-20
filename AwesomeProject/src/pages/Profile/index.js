/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Text, 
    Button, 
    AsyncStorage
} from 'react-native';
const Profile = ({navigation}) => {
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('login_token')
            if ( value !== null ) {
                console.log(value);
            }
        } catch(e) {
            // error reading value
        }
    }

    let token = getData();

    if ( token == null ) {
        navigation.navigate('Home');
    }

    const removeValue = async () => {
        await AsyncStorage.removeItem('login_token');
        console.log('Local storage cleaned.');
        navigation.navigate('Landing');
      }

    return (
        <>
            <Text>Ini Profile</Text>
            <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
            <Button title="Logout" onPress={() => removeValue()} />
        </>
    );
};
export default Profile;