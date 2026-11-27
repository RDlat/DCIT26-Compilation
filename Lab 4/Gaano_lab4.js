// Lab 4 - Basic Components (View, Text, Image, Button, ScrollView, Modal, StyleSheet)
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="CLICK ME" onPress={() => setVisible(true)} />
      <SampleModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
