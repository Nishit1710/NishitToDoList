import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import { require } from 'react-native-reanimated';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = require('../../data/tasks.json');
    setTasks(data.tasks);
  }, []);

  const handleAddTask = () => {
    if (taskText.trim()!== '') {
      const newTask = {
        id: Math.random().toString(36).substring(2),
        text: taskText,
      };
      setTasks((prevTasks) => [newTask,...prevTasks]);
      setTaskText('');
    }
  };

  const handleGenerateRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    setTaskText(randomTask.text);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default ToDoForm;