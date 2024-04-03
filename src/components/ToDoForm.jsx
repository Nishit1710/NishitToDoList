import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
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
});

export default ToDoForm;
