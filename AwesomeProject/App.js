// import React from 'react';
// import { View, Text, Image } from 'react-native';

import React, { useState } from 'react';
import { View, SafeAreaView, Text, Platform } from 'react-native';

import styles from './src/assets/styles.js';
import Todolist from './src/components/Todolist/index.js';
import Listtodo from './src/components/Todolist/listtodo.js';
//import ButtonCustom from './src/components/ButtonCustom/index.js';

const App = () => {
    const [todo, setTodo] = useState([]);
    const handleTodolist = (value) => {
        setTodo(todo.concat(value));
    }
    return (
        <SafeAreaView>
            <View style={[styles.wrapper]}>
                <Todolist handleTodolist={handleTodolist} />
                <Listtodo todo={todo} />
            </View>
        </SafeAreaView>
    )
}

export default App;
