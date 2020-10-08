import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeParamList } from '../types'
import { NavigationActions } from 'react-navigation';

export default function HomeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, User!</Text>
      <Text style={styles.subheader}>What do you want to do today?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        mode="contained"
        color='#ED127C'
        onPress={() => navigation.navigate('MapViewScreen')}
      >
          Find a Clinic
      </Button>
      <Button mode="contained" color='#ED127C' onPress={() => console.log('click')}>
          My Reviews
      </Button>
      <Button mode="contained" color='#ED127C' onPress={() => console.log('click')}>
          My Profile
      </Button>
      <Button mode="contained" color='#ED127C' onPress={() => console.log('click')}>
          FAQs
      </Button>
      <Button mode="contained" color='#ED127C' onPress={() => console.log('click')}>
          Logout
      </Button>
      <EditScreenInfo path="/screens/Home.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subheader: {
    fontSize: 16
  },
  button: {
    color: '#ED127C',
    margin: '1em 1em'
  }
});