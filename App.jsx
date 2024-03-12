/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import useState from 'react';

function App() {
  const [tasks , setTasks] = React.useState([
    "Wake up early", 
    "Go to the gym for an hour",
    "Go to work",
    "Eat Healthy",
    "Sleep early",
 ]);
 const addTask = (taskText)=> {
  if (taskText.trim() !== '' && !tasks.includes(taskText)) {
    setTasks([...tasks, taskText]);
    console.log(`Task "${taskText}" added successfully.`);
  } else {
    console.log('Something went wrong. Please add a new task again.');
  }
 };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
