import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateCasePage = ({ navigation }) => {
  const [caseNumber, setCaseNumber] = useState('');
  const [officerNameUnit, setOfficerNameUnit] = useState('');
  const [caseDescription, setCaseDescription] = useState('');

  const handleCreateCase = () => {
    console.log('Case Created:', caseNumber, officerNameUnit, caseDescription);
    // Implement server communication or local storage logic here
  };

  return (

    <KeyboardAvoidingView 
      style={{flex: 1}} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        
      <ScrollView 
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
      >
        <Text style={styles.title}>Create a new case file</Text> 
        <TextInput
          style={styles.input}
          onChangeText={setCaseNumber}
          value={caseNumber}
          placeholder="Case Number"
          keyboardType="default"
          placeholderTextColor="#9EABB8"
        />
        <TextInput
          style={styles.input}
          onChangeText={setOfficerNameUnit}
          value={officerNameUnit}
          placeholder="Officer name & unit"
          keyboardType="default"
          placeholderTextColor="#9EABB8"
        />
        
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          onChangeText={setCaseDescription}
          value={caseDescription}
          placeholder="Case description"
          multiline
          numberOfLines={4}
          placeholderTextColor="#9EABB8"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleCreateCase}
        >
          <Text style={styles.buttonText}>Create Case File</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#121A21',
  },
  input: {
    width: '90%', 
    height: 50,
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#293038',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 16,
  },
  descriptionInput: {
    height: 150, 
  },
  button: {
    width: '90%', 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C82D4',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center', 
    color: 'white',
  },

  backButton: {
    position: 'absolute',
    top: 70,
    left: 20, 
    padding: 10,
  },
       
    
});

export default CreateCasePage;
