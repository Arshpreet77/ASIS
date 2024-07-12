import React from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EvidenceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121A21" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={styles.title}>Evidence</Text>
      <View style={styles.contentContainer}>
        <Text style={ styles.title1}>Empty / No Evidece File Available</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A21',
    padding: 50,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20, 
    padding: 10, 
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20, 
    paddingTop: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    fontSize: 20,
    color: '#FFFFFF',
  },
 
});

export default EvidenceScreen;


