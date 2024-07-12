import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CasePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search or Create Case</Text>
      <Image
        source={require('../assets/cases.jpg')} // Ensure the path is correct
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SearchCasePage')}>
        <Text style={styles.buttonText}>Search Case</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('CreateCasePage')}>
        <Text style={styles.buttonText}>Create Case</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A21',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20, 
    padding: 10,
  },
  button: {
    backgroundColor: '#243647',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 300,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,  
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 20,
  },
  image: {
    width: '100%', 
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain' 
  },
});

export default CasePage;
