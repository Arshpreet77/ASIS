import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      Alert.alert('Login Successful');
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.backgroundContainer}
    >
      <StatusBar barStyle="light-content" backgroundColor="#00008B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../assets/asis.webp')} style={styles.reactLogo} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome Back!</Text>
          <TextInput
            style={styles.input}
            placeholder="Officer Name"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="white" // Placeholder text color
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="white" // Placeholder text color
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#121A21',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  contentContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  reactLogo: {
    height: 400,
    width: 430,
    marginTop: -50,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#243647',
    color: '#94ADC7',
    borderRadius: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#146BC2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Login;
