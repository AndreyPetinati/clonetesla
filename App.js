import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem/index'
import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
