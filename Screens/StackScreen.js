import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StackScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Cambia el color de fondo a un tono de gris claro
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%',
    fontWeight: 'bold',
    color: '#333', // Cambia el color del texto a un tono de gris más formal
  },
});

export default StackScreen;
