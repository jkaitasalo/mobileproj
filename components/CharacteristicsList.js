import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Text, IconButton, Snackbar, Divider } from 'react-native-paper';
import { defaultCharacteristics, characteristicNames } from '../src/characteristics.js';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles.js';

const MAX_POINTS = 315;
const MAX_CHARACTERISTIC_VALUE = 40;

const CharacteristicsList = ({ availablePoints, setAvailablePoints }) => {
  const [characteristics, setCharacteristics] = useState(defaultCharacteristics);
  const [minCharacteristics, setMinCharacteristics] = useState(defaultCharacteristics);
  const [characteristicColors, setCharacteristicColors] = useState({});
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [homeworld, setHomeworldState] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const totalAllocatedPoints = Object.values(characteristics).reduce((sum, value) => sum + parseInt(value), 0);
    setAvailablePoints(MAX_POINTS - totalAllocatedPoints);
  }, [characteristics, setAvailablePoints]);

  const handleInputChange = (key, value) => {
    const intValue = parseInt(value);
    const totalAllocatedPoints = Object.values(characteristics).reduce((sum, val) => sum + parseInt(val), 0) - parseInt(characteristics[key]) + intValue;

    if (intValue <= MAX_CHARACTERISTIC_VALUE && totalAllocatedPoints <= MAX_POINTS) {
      setCharacteristics({
        ...characteristics,
        [key]: value,
      });
    } else if (totalAllocatedPoints > MAX_POINTS) {
      setSnackbarMessage('No available points left!');
      setSnackbarVisible(true);
    } else {
      setSnackbarMessage(`Value cannot exceed\nMAX Characteristics value!`);
      setSnackbarVisible(true);
    }
  };

  const incrementValue = (key) => {
    const newValue = parseInt(characteristics[key]) + 1;
    const totalAllocatedPoints = Object.values(characteristics).reduce((sum, val) => sum + parseInt(val), 0) + 1;

    if (newValue <= MAX_CHARACTERISTIC_VALUE && totalAllocatedPoints <= MAX_POINTS) {
      setCharacteristics({
        ...characteristics,
        [key]: newValue.toString(),
      });
    } else if (totalAllocatedPoints > MAX_POINTS) {
      setSnackbarMessage('No available points left!');
      setSnackbarVisible(true);
    } else {
      setSnackbarMessage(`Value cannot exceed\nMAX Characteristics value!`);
      setSnackbarVisible(true);
    }
  };

  const decrementValue = (key) => {
    const newValue = parseInt(characteristics[key]) - 1;
    if (newValue >= minCharacteristics[key]) {
      setCharacteristics({
        ...characteristics,
        [key]: newValue.toString(),
      });
    } else {
      setSnackbarMessage(`Value cannot go below\nMIN Characteristics value!`);
      setSnackbarVisible(true);
    }
  };

  const resetCharacteristics = () => {
    setCharacteristics(defaultCharacteristics);
    setMinCharacteristics(defaultCharacteristics);
    setCharacteristicColors({});
  };

  const handleSetHomeworld = (homeworld) => {
    resetCharacteristics();

    const newMinCharacteristics = homeworld.characteristics;
    const newCharacteristics = { ...defaultCharacteristics };
    const newColors = {};

    Object.keys(newMinCharacteristics).forEach((key) => {
      newCharacteristics[key] = newMinCharacteristics[key].toString();
      newColors[key] = newMinCharacteristics[key] >= 30 ? 'green' : 'red';
    });

    setCharacteristics(newCharacteristics);
    setMinCharacteristics(newMinCharacteristics);
    setCharacteristicColors(newColors);
    setHomeworldState(homeworld);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pointsLeft}>Points Left: {availablePoints}</Text>
      {Object.keys(characteristics).map((key, index) => (
        <View key={key}>
          <View style={styles.characteristicRow}>
            <Text style={[
              styles.characteristicName,
              { color: characteristicColors[key] || 'black' }
            ]}>
              {characteristicNames[key]}
            </Text>
            <View style={styles.inputContainer}>
              <IconButton
                icon="minus"
                size={20}
                onPress={() => decrementValue(key)}
              />
              <TextInput
                style={styles.input}
                value={characteristics[key].toString()}
                onChangeText={(text) => handleInputChange(key, text)}
                mode="outlined"
                keyboardType="numeric"
                textAlign="center"
              />
              <IconButton
                icon="plus"
                size={20}
                onPress={() => incrementValue(key)}
              />
            </View>
          </View>
          {index < Object.keys(characteristics).length - 1 && <Divider style={styles.divider} />}
        </View>
      ))}
      <View style={styles.bottomButtons}>
        <Button
          mode="contained"
          onPress={() => {
            resetCharacteristics();
            navigation.navigate('Background', {
              setHomeworld: handleSetHomeworld,
              resetCharacteristics: resetCharacteristics,
            });
          }}
        >
          {homeworld ? 'Reset and Choose a Homeworld' : 'Choose a Homeworld'}
        </Button>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_SHORT}
        style={styles.snackbar}
      >
        <Text style={styles.snackbarText}>{snackbarMessage}</Text>
      </Snackbar>
    </ScrollView>
  );
};

export default CharacteristicsList;
