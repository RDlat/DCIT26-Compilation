// Lab 7 - Networking (Fetch API + Navigation)
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const API_URL = 'https://randomuser.me/api';

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setUser(json.results[0]);
    } catch (e) {
      setError('Failed to load user. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <View style={styles.homeContainer}>
      {loading && <ActivityIndicator size="large" color="#2196F3" />}

      {!loading && error && <Text style={styles.error}>{error}</Text>}

      {!loading && user && (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { user })}>
            <Image source={{ uri: user.picture.large }} style={styles.homeImage} />
          </TouchableOpacity>
          <Text style={styles.homeName}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={fetchUser}>
        <Text style={styles.buttonText}>RANDOM USER</Text>
      </TouchableOpacity>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function ProfileScreen({ route }) {
  const { user } = route.params;
  const { name, location, dob, gender, email, phone, cell, registered, login, nat } = user;

  return (
    <ScrollView style={styles.profileContainer} contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: user.picture.large }} style={styles.profileImage} />
        <Text style={styles.profileName}>
          {name.title} {name.first} {name.last}
        </Text>
      </View>

      <Section title="About">
        <Text style={styles.detail}>Age: {dob.age}</Text>
        <Text style={styles.detail}>Birthday: {dob.date}</Text>
        <Text style={styles.detail}>Gender: {gender}</Text>
        <Text style={styles.detail}>Nationality: {nat}</Text>
        <Text style={styles.detail}>
          Address: {location.street.number} {location.street.name}, {location.city},{' '}
          {location.state}, {location.country}
        </Text>
      </Section>

      <Section title="Contact">
        <Text style={styles.detail}>Email: {email}</Text>
        <Text style={styles.detail}>Phone: {phone}</Text>
        <Text style={styles.detail}>Cell: {cell}</Text>
      </Section>

      <Section title="Other">
        <Text style={styles.detail}>Username: {login.username}</Text>
        <Text style={styles.detail}>Date registered: {registered.date}</Text>
      </Section>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  homeImage: { width: 150, height: 150, borderRadius: 4 },
  homeName: { fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 16 },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 4,
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  error: { color: 'crimson', marginBottom: 12 },

  profileContainer: { flex: 1, backgroundColor: '#f0f0f0' },
  profileImage: { width: 140, height: 140, borderRadius: 4 },
  profileName: { fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 10 },
  section: { marginTop: 18 },
  sectionTitle: {
    fontSize: 15,
    color: '#666',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 4,
    marginBottom: 6,
  },
  detail: { fontSize: 13, marginVertical: 2, color: '#222' },
});
