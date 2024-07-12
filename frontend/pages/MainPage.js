import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASIS</Text>
      <Text style={styles.title2}>Search Records</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BOLO')}>
          <Text style={styles.buttonText}>ATL/BOLO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TrespassRecords')}>
          <Text style={styles.buttonText}>Trespass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WantedRecords')}>
          <Text style={styles.buttonText}>Wanted</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactHistory')}>
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cases}>Recent Cases</Text>
      <View style={styles.caseDetails}>
        <View style={styles.caseRow}>
          <Icon name="arrow-right" size={30} color="white" />
          <View style={styles.caseTextContainer}>
            <Text style={styles.caseText}>Case 1287: Kidnapping</Text>
            <Text style={styles.caseInvestigator}>Investigator: James Brown</Text>
          </View>
        </View>
        <View style={styles.caseRow}>
          <Icon name="arrow-right" size={30} color="white" />
          <View style={styles.caseTextContainer}>
            <Text style={styles.caseText}>Case 1288: Fraud</Text>
            <Text style={styles.caseInvestigator}>Investigator: Sarah Doe</Text>
          </View>
        </View>
        <View style={styles.caseRow}>
          <Icon name="arrow-right" size={30} color="white" />
          <View style={styles.caseTextContainer}>
            <Text style={styles.caseText}>Case 1289: Theft</Text>
            <Text style={styles.caseInvestigator}>Investigator: John Doe</Text>
          </View>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A21',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 25,
    color: 'white',
    marginVertical: 20,
  },
  title2: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  button: {
    height: 40,
    flex: 1,
    backgroundColor: '#243647',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  cases: {
    fontSize: 30,
    color: 'white',
    marginVertical: 200,
    marginBottom: 30,
    marginLeft: -200,
    
  },
  caseDetails: {
    width: '100%',
    marginVertical: 20,
  },
  caseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  caseText: {
    fontSize: 18,
    color: 'white',
  },
  caseInvestigator: {
    fontSize: 16,
    color: '#94ADC7',
  },
  
  caseTextContainer:{
    marginLeft: 10
  }
});

export default MainPage;
