import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const massages = [
  { type: 'Swedish', key: 'swedish' },
  { type: 'Deep Tissue', key: 'deepTissue' },
  { type: 'Sports', key: 'sports' },
  // Add more types as needed
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {massages.map((massage) => (
        <TouchableOpacity
          key={massage.key}
          style={styles.button}
          onPress={() => navigation.navigate('/massage/' + massage.key)}
        >
          <Text style={styles.text}>{massage.type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
});

export default HomeScreen;
