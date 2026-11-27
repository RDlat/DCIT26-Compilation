// Lab 3 - Button, TextInput, and List
// Name: Ray Ardee F. Gaano | BSCS 3-2

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    const trimmed = text.trim();
    if (trimmed === '') return; // ignore empty input
    setItems((prev) => [...prev, { id: Date.now().toString(), name: trimmed }]);
    setText(''); // clear the TextInput
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={text}
          onChangeText={setText}
        />
        <Button title="ADD" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  item: {
    backgroundColor: '#7a7a7a',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  itemText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
