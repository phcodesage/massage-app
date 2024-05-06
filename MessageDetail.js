import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const massageDetails = {
  swedish: "Description for Swedish Massage.",
  deepTissue: "Description for Deep Tissue Massage.",
  sports: "Description for Sports Massage.",
  // Add more details as needed
};

const MassageDetail = ({ route }) => {
  const { type } = route.params;
  const description = massageDetails[type];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{type.toUpperCase()} MASSAGE</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
  },
});

export default MassageDetail;
