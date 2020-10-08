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

export default function HomeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good morning, Jane!</Text>
      <Text style={styles.body}>How are you feeling today?</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        mode="contained"
        color="#ED127C"
        onPress={() => navigation.navigate("MapViewScreen")}
      >
        Find a Clinic
      </Button>
      <Button
        mode="contained"
        color="#ED127C"
        onPress={() => navigation.navigate("UserClinicsScreen")}
      >
        My Reviews
      </Button>
      <Button
        mode="contained"
        color="#ED127C"
        onPress={() => navigation.navigate("UserProfileScreen")}
      >
        My Profile
      </Button>
      <Button
        mode="contained"
        color="#ED127C"
        onPress={() => navigation.navigate("FAQScreen")}
      >
        FAQs
      </Button>
      <Button
        mode="contained"
        color="#ED127C"
        onPress={() => console.log("click")}
      >
        Logout
      </Button>
      <Image
        style={{
          resizeMode: "contain",
          height: 150,
          width: 200,
        }}
        source={require("../assets/images/woman.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F8FD",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 32,
    paddingTop: 8
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subheader: {
    fontSize: 18,
    fontFamily: "poppins-semibold",
  },
  button: {
    alignContent: "center",
    color: "#ED127C",
    fontSize: 18,
    fontFamily: "poppins-light",
    margin: "1em 1em",
  },
});