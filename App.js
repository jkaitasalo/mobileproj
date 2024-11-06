import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacteristicsList from './components/CharacteristicsList';
import Background from './components/Background';
import { PaperProvider } from 'react-native-paper';
import theme from './src/theme';

const Stack = createStackNavigator();

export default function App() {
  const [availablePoints, setAvailablePoints] = useState(315);
  const [homeworld, setHomeworld] = useState(null);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CharacteristicsList">
          <Stack.Screen name="Characteristics">
            {(props) => (
              <CharacteristicsList
                {...props}
                availablePoints={availablePoints}
                setAvailablePoints={setAvailablePoints}
                setHomeworld={setHomeworld}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Background">
            {(props) => <Background {...props} setHomeworld={setHomeworld} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};