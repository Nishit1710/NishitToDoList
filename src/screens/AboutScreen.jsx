import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>This is my ToDo-List App</Text>
        <Text>Developer: Nishit Patel</Text>
        <Text>{new Date().toDateString()}</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
