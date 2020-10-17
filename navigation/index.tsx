import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Provider as PaperProvider } from 'react-native-paper';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ED127C',
      background: '#E5E5E5',
      card: '#FFFFFF',
      text: 'rgba(30, 28, 97, 0.65)',
      border: '#E5E5E5',
      notification: '#ED127C',
    },
  };

  return (
      <PaperProvider>
        <NavigationContainer
          linking={LinkingConfiguration}
          theme={theme}
          >
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
  );
}
