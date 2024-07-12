import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchCasePage = ({ navigation }) => {
  const [caseNumber, setCaseNumber] = useState('');
  const [officerUnit, setOfficerUnit] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', caseNumber, officerUnit);
  };
  return (
    
    <View style={styles.container}>

        <Text style={styles.title}>Search Case</Text> 

      <TextInput
        style={styles.input}
        onChangeText={setCaseNumber}
        value={caseNumber}
        placeholder="Enter Case Number"
        keyboardType="default"
        placeholderTextColor="#9EABB8"h
      />
      <TextInput
        style={styles.input}
        onChangeText={setOfficerUnit}
        value={officerUnit}
        placeholder="Enter Officer Unit #"
        keyboardType="default"
        placeholderTextColor="#9EABB8"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      padding: 20,
      backgroundColor: '#121A21',
    },

    title: {    
        fontSize: 30,
        fontWeight: 'bold',   
        color: 'white',
        marginBottom: 100,
    },
        
    input: {
      height: 50,
      width: '90%', 
      marginVertical: 15,
      paddingHorizontal: 10,
      backgroundColor: '#293038',
      borderRadius: 5,
      color: '#FFFFFF'
    },
    searchButton: {
      height: 50,
      width: "90%",
      backgroundColor: '#1C82D4',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#1C82D4',
      marginTop: 50,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      top: 70,
      left: 20, 
      padding: 10,
    },
  });
  
  export default SearchCasePage;

