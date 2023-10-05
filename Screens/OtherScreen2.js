import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const OtherScreen2 = ({ navigation }) => {
  const data = [
    { id: '1', label: 'Opcion 1' },
    { id: '2', label: 'Opcion 2' },
    { id: '3', label: 'Opcion 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.optionContainer}>
      <Button
        title={item.label}
        onPress={() => handleOptionPress(item.id)}
        color="#333" // Cambia el color del botón a un tono de gris más formal
      />
    </View>
  );

  const handleOptionPress = (optionId) => {
    console.log(`Option ${optionId} pressed`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Other Screen 2</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Cambia el color de fondo a un tono de gris claro
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // Cambia el color del texto a un tono de gris más formal
  },
  optionContainer: {
    marginVertical: 10,
  },
});

export default OtherScreen2;
