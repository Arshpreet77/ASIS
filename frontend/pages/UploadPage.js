import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const UploadPicturePage = ({ navigation }) => {

  const handleChooseFromDocuments = () => {
    console.log('Choose from documents button pressed');
    // Placeholder for future functionality
  };

  const handleTakePhoto = () => {
    console.log('Take photo button pressed');
    // Placeholder for future functionality
  };
  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.contentCenter}>
        <Text style={styles.title}>Upload a Picture</Text>
        <Image
          source={require('../assets/camera.jpg')}
          style={styles.image}
        />
        <Text style={styles.instructions}>
          Please upload a clear, in high resolution image of the suspect. Make sure the photo is taken with
          good lighting and avoid reflections on the face.
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleChooseFromDocuments}
        >
          <Text style={styles.buttonText}>Choose from Documents</Text>
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleTakePhoto} 
        >
          <Text style={styles.buttonText}>Take Photo</Text>
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>



    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 50,
    backgroundColor: '#121A21',
  },
  contentCenter: {
    alignItems: 'center', 
    width: '100%', 
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    width: '200%',
    height: 300, 
    resizeMode: 'contain',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
    marginHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    height: 50,
    width: '90%',
    backgroundColor: '#243647',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },

  backButton: {
    position: 'absolute',
    top: 70,
    left: 20, 
    padding: 10, 
  },
});

export default UploadPicturePage;
