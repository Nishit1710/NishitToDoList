import React from 'react';
import { View, Button } from 'react-native';

import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
