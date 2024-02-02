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
  
function ToDoForm(props) {
    return (
        <>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                />
                <Button title="Add" />
            </View>
        </>
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
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default ToDoForm;