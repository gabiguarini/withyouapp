import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BgLogin from '../components/BgLogin';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
    <BgLogin>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.body}>
            How are you feeling today?
    </Text>
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
        <Button style={styles.logout} mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
            Logout
    </Button>
        <Image
            style={{
                resizeMode: "contain",
                height: 150,
                width: 200,
                position: "absolute",
                left: -50,
                bottom: 0,
            }}
            source={require("../assets/woman.png")}
        />
    </BgLogin>
);
const styles = StyleSheet.create({
    logout: {
        position: "absolute",
        bottom: 15,
    },
    title: {
        fontSize: 36,
        color: '#333333',
        paddingBottom: 5,
        marginTop: -20,

    },
    body: {
        fontSize: 18,
        color: '#1E1C61',

    },
    
});
export default memo(Dashboard);
