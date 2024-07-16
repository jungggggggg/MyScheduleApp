// src/app/(tabs)/screens/profile.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileImagePicker from '../../components/ImagePicker';
import getWeather from '../../services/weatherService';
import WhatDayToday from '../../services/dayService';

export default function ProfileScreen() {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    WhatDayToday();
  },[])

  return (
    <View style={styles.container}>
      <ProfileImagePicker />
      {weatherData ? (
        <View style={styles.weatherContainer}>
          <Text>City: {weatherData.name}</Text>
          <Text>Temperature: {weatherData.main.temp}°C</Text>
          <Text>Weather: {weatherData.weather[0].description}</Text>
        </View>
      ) : (
        <Text>Loading weather data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});