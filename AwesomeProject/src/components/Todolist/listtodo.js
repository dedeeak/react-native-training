import React from 'react';
import { View, Text,  } from 'react-native';

import styles from '../../assets/styles.js';

const Listtodo = ({todo}) => {
    return (
        <View style={[styles.wrapper]}>
            {todo.map((item) => {
                return (
                    <>
                        <Text>Label: {item.activity}, Status: {item.status}</Text>
                    </>
                )
            })}
        </View>
    )
}

export default Listtodo;