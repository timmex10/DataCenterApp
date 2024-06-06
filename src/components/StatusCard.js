import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusCard = ({ temperature, humidity, powerUsage, networkTraffic }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Temperature: {temperature} °C</Text>
      <Text style={styles.label}>Humidity: {humidity} %</Text>
      <Text style={styles.label}>Power Usage: {powerUsage} W</Text>
      <Text style={styles.label}>Network Traffic: {networkTraffic} Mbps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default StatusCard;
