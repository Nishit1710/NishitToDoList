import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
  
function ToDoList({tasks}) {
  return (
    <ScrollView>
      <View style={styles.container}>
          {tasks.map((task, index) => (
            <Pressable key={index}>
              <View style={[styles.taskContainer, styles.incompleteTask]}>
                <View style={styles.circle} />
                <Text style={styles.taskText}>{task}</Text>
              </View>
            </Pressable>
          ))}
        </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    task: {
      padding: 15,
      borderBottomWidth: 2,
      borderColor: '#4CAF50',
    },
    incompleteTask: {
      backgroundColor: '#FFF',
    },
    completed: {
      backgroundColor: '#C8E6C9',
    },
    taskText: {
      fontSize: 18,
      color: '#333',
      fontWeight: 'bold',
    }
});

export default ToDoList;
