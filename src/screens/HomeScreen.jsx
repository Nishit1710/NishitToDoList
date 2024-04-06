import React from 'react';
import { Button, SafeAreaView, View , StyleSheet} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from "../components/ToDoForm";
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  const [tasks , setTasks] = React.useState([
    'Wake Up at 8am', 
    'Attend Class',
    'Complete The Assignment',
    'Go to Gym',
 ]);
  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm  addTask={addTask} />
        <View style = {styles.button}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
});