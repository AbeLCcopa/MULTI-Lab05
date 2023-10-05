import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        color="#007bff" // Cambia el color del botón a tu preferencia
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Cambia el color de fondo a tu preferencia
  },
  title: {
    fontSize: 24,
    marginBottom: 20, // Agrega un margen inferior
    fontWeight: 'bold', // Hace que el texto sea audaz
    color: '#333', // Cambia el color del texto a tu preferencia
  },
});

export default HomeScreen;
