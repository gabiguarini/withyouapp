import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function UserClinicsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY CLINICS</Text>
      <Text style={styles.title}>This will be where the user can see their reviewed clinics</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
