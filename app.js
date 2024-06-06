import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { getStatus } from './src/services/api';
import StatusCard from './src/components/StatusCard';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const status = await getStatus();
      setData(status);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <StatusCard
          temperature={data.temperature}
          humidity={data.humidity}
          powerUsage={data.powerUsage}
          networkTraffic={data.networkTraffic}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});

export default App;
