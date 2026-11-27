// Lab 2 - Student Profile (View and Text Components)
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Ray Ardee F. Gaano</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.value}>BS Computer Science, 3rd Year, Section 2</Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.value}>
        I'm a Computer Science student who loves to sleep and play video games.
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.value}>- Deans lister Gawad 7th Awarding. </Text>
      <Text style={styles.value}>- Survived 1st and 2nd year of Computer Science. </Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>- Java </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 13,
    color: '#222',
    marginTop: 2,
  },
});
