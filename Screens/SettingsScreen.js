import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        color="#333" // Cambia el color del botón a un tono de gris más formal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // Cambia el color de fondo a un tono de gris claro
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // Cambia el color del texto a un tono de gris más formal
  },
});

export default SettingsScreen;
