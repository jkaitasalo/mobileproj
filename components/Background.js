import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import homeworlds from '../src/homeworlds.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../src/styles.js';

const Background = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { setHomeworld, resetCharacteristics } = route.params;

  const handleSelectHomeworld = (homeworld) => {
    resetCharacteristics();
    setHomeworld(homeworld);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant='titleLarge' style={styles.topTitle}>
        Press the button on a card to choose your Homeworld
      </Text>
      {Object.keys(homeworlds).map((key) => (
        <Card mode='elevated' key={key} style={styles.card}>
          <Card.Cover source={{ uri: homeworlds[key].image }} />
          <Card.Content>
            <Text variant="titleLarge" style={styles.title}>{homeworlds[key].name}</Text>
            <View style={styles.characteristicsContainer}>
              <View style={styles.characteristicsText}>
                {Object.keys(homeworlds[key].characteristics).map((charKey) => (
                  <Text key={charKey}>
                    {charKey.charAt(0).toUpperCase() + charKey.slice(1)}: {homeworlds[key].characteristics[charKey]}
                  </Text>
                ))}
              </View>
              <IconButton
                icon="cursor-pointer"
                mode='contained'
                size={30}
                onPress={() => handleSelectHomeworld(homeworlds[key])}
                style={styles.icon}
              />
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Background;
