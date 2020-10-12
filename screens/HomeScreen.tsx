import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeParamList } from '../types'
import { NavigationActions } from 'react-navigation';
import { color } from 'react-native-reanimated';

export default function HomeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.topCont}>
        <Text style={styles.title}>Good morning, Jane!</Text>
        <Text style={styles.body}>How are you feeling today?</Text>
      </View>

      <View style={styles.buttonsCont}>
        <Button
          mode="contained"
          color="#ED127C"
          uppercase={false}
          onPress={() => navigation.navigate("MapViewScreen")}
          style={{padding: 8, paddingLeft: 16, paddingRight: 16, borderRadius: 50}}
        >
          <Text style={styles.buttonText}>Review a Clinic</Text>
        </Button>
        <Button
          mode="contained"
          color="#ED127C"
          uppercase={false}
          onPress={() => navigation.navigate("UserProfileScreen")}
          style={{marginTop: 32, padding: 8, paddingLeft: 16, paddingRight: 16, borderRadius: 50}}
        >
          <Text style={styles.buttonText}>Update Details</Text>
        </Button>
      </View>
      
      <View style={styles.imgCont}>
        <Image
        style={{resizeMode: "contain", height: 150, width: 200, position: "absolute", bottom: 0, left: 0}}
        source={require("../assets/images/woman.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F8FD",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 8
  },
  topCont: {
    flex: 2,
    backgroundColor: "#F9F8FD",
    paddingTop: 8,
    paddingLeft: 32
  },
  buttonsCont: {
    flex: 3,
    backgroundColor: "#F9F8FD",
    alignSelf: "center"
  },
  imgCont: {
    flex: 1,
    backgroundColor: "#F9F8FD",
  },
  title: {
    fontSize: 36,
    color: '#333333',
    fontFamily: "poppins-semibold",
    paddingBottom: 24
  },
  body: {
    fontSize: 18,
    color: '#1E1C61',
    fontFamily: "poppins-regular",
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: "poppins-regular",
  }
});