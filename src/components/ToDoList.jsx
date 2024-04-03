import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks available</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {tasks.map((task, index) => (
          <View key={index} style={[styles.taskContainer, styles.incompleteTask]}>
            <View style={styles.circle} />
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginRight: 10,
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  incompleteTask: {
    backgroundColor: '#FFF',
  },
  completed: {
    backgroundColor: '#C8E6C9',
  },
});

export default ToDoList;
