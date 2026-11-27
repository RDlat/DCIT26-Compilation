// Lab 6 - Passing Data Between Screens
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Array that stores the contents of each product
const PRODUCTS = [
  {
    key: '1',
    title: 'Xbox',
    rating: '5/5',
    description: 'A home video game console made by Microsoft, known for its Game Pass library.',
  },
  {
    key: '2',
    title: 'PS5',
    rating: '4.8/5',
    description: 'Sony’s home console with fast SSD loading, haptic feedback and exclusive games.',
  },
  {
    key: '3',
    title: 'Nintendo Switch',
    rating: '4.7/5',
    description: 'A hybrid console that can be played docked on a TV or as a handheld.',
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={PRODUCTS}
        // each item already has a "key", so FlatList uses it automatically
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Product', { product: item })}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.detailTitle}>{product.title}</Text>
      <Text style={styles.detail}>Rating: {product.rating}</Text>
      <Text style={styles.detail}>Key: {product.key}</Text>
      <Text style={styles.detail}>{product.description}</Text>
    </View>
  );
}

const menuButton = (navigation) => () => (
  <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu}>
    <Text style={styles.menuIcon}>☰</Text>
  </TouchableOpacity>
);

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  item: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 3,
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#fafafa',
  },
  itemText: { fontSize: 14 },
  detailTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  detail: { fontSize: 14, marginBottom: 4 },
  menu: { paddingHorizontal: 16 },
  menuIcon: { fontSize: 22 },
});
