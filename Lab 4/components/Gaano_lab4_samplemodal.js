// components/SampleModal.js
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React from 'react';
import { Modal, View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';

const PARAGRAPH =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. Ut diam quam nulla porttitor massa id neque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Tortor aliquam nulla facilisi cras fermentum. Nibh nisl condimentum id venenatis. Id aliquet risus feugiat in. Suspendisse in est ante in nibh mauris.';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
        />

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>{PARAGRAPH}</Text>
          <Text style={styles.text}>{PARAGRAPH}</Text>
          <Text style={styles.text}>{PARAGRAPH}</Text>
          <Text style={styles.text}>{PARAGRAPH}</Text>
        </ScrollView>

        <View style={styles.buttonWrapper}>
          <Button title="CLOSE" color="red" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 13,
    textAlign: 'justify',
    marginBottom: 12,
  },
  buttonWrapper: {
    marginTop: 12,
  },
});
