// Lab 5 - Navigators (Stack + Drawer)
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/* ---------- Screens ---------- */

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="PROFILE" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK HOME" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
    </View>
  );
}

/* ---------- Hamburger button to open the drawer ---------- */

const menuButton = (navigation) => () => (
  <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu}>
    <Text style={styles.menuIcon}>☰</Text>
  </TouchableOpacity>
);

/* ---------- Stacks ---------- */

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
    </Stack.Navigator>
  );
}

/* ---------- Drawer (root) ---------- */

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  menu: { paddingHorizontal: 16 },
  menuIcon: { fontSize: 22 },
});
