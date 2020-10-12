import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MapViewScreen from '../screens/MapViewScreen';
import UserClinicsScreen from '../screens/UserClinicsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import FAQScreen from '../screens/FAQScreen';
import {
  BottomTabParamList,
  HomeParamList,
  UserClinicsParamList,
  UserProfileParamList,
  MapViewParamList,
  FAQParamList
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={36} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MapViewScreen"
        component={MapViewNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="spa" color={color} size={36} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FAQScreen"
        component={FAQNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="forum" color={color} size={36} />
          ),
        }}
      />
      <BottomTab.Screen
        name="UserProfileScreen"
        component={UserProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={36} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
    </HomeStack.Navigator>
  );
}

const MapViewStack = createStackNavigator<MapViewParamList>();

function MapViewNavigator() {
  return (
    <MapViewStack.Navigator>
      <MapViewStack.Screen
        name="MapViewScreen"
        component={MapViewScreen}
        options={{
          headerTitle: 'Map View',
        }}
      />
    </MapViewStack.Navigator>
  );
}

const UserClinics = createStackNavigator<UserClinicsParamList>();

function UserClinicsNavigator() {
  return (
    <UserClinics.Navigator>
      <UserClinics.Screen
        name="UserClinicsScreen"
        component={UserClinicsScreen}
        options={{ headerTitle: "My Clinics" }}
      />
    </UserClinics.Navigator>
  );
}

const UserProfile = createStackNavigator<UserProfileParamList>();

function UserProfileNavigator() {
  return (
    <UserProfile.Navigator>
      <UserProfile.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ headerTitle: "My Profile" }}
      />
    </UserProfile.Navigator>
  );
}

const FAQ = createStackNavigator<FAQParamList>();

function FAQNavigator() {
  return (
    <FAQ.Navigator>
      <FAQ.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{ headerTitle: "FAQs" }}
      />
    </FAQ.Navigator>
  );
}