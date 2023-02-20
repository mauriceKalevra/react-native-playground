import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

const ButtonComponent = () => {
  const { width } = Dimensions.get('window');
  const buttonWidth = width / 2; // Buttons nehmen die Hälfte der Bildschirmbreite ein
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
          <Text style={styles.buttonText}>Favoriten</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
          <Text style={styles.buttonText}>Charactere</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
          <Text style={styles.buttonText}>Zivilisten</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
          <Text style={styles.buttonText}>Sprecher</Text>
        </TouchableOpacity>
        <View style={styles.spacing} />
        <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
          <Text style={styles.buttonText}>Sonstiges</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  spacing: {
    height: 10,
  },
});

export default ButtonComponent;
