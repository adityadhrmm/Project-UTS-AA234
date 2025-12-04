import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

type Props = {
  navigation: any; 
};

export default function LandingPage({ navigation }: Props) {
  return (
    <ImageBackground
      source={require('../source/asset/landingpage.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Center Content */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>Welcome to YMC Coffe</Text>
        <Text style={styles.subtitle}>Let a cup of coffe be the first companion of every step you take today</Text>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MenuPage')}
        >
          <Text style={styles.buttonText}>Click to Order</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomArea: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    marginTop: 10,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#442908ff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
