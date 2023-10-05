import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const OtherScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/200' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/200' }}
          style={styles.image}
        />
      </View>
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
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default OtherScreen1;
