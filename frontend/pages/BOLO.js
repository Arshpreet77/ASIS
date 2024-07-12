import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const BOLO = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ATL/BOLO Records</Text>
            <View style={styles.contentContainer}>
                <Image source={require('../assets/Donald.jpg')} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title1}>BUZZ, Bucky</Text>
                    <Text style={styles.title2}>Approx, 40, 5'9 Tall</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title1}>Description</Text>
                <Text style={styles.title2}>Indigenous male, 5'9" tall, medium build, short black hair, walks or runs while hunched over</Text>
                <Text style={styles.title1}>DOB/Age</Text>
                <Text style={styles.title2}>40</Text>
                <Text style={styles.title1}>Reason</Text>
                <Text style={styles.title2}>Aggressive with staff, causes disturbance</Text>
                <Text style={styles.title1}>Behavior</Text>
                <Text style={styles.title2}>Non-compliant, known to smoke a lot of Unknown Substances.</Text>
            </View>

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
        backgroundColor: '#121A21',
        padding: 50,
    },
    backButton: {
        position: 'absolute',
        top: 70,
        left: 10,
        padding: 10,
    },

    title: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginVertical: 30,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
    },
    title1: {
        color: "#FFE600",
        fontSize: 20,
        marginBottom: 5,
    },
    title2: {
        color: "white",
        fontSize: 16,
        marginBottom: 15,
    },
    detailsContainer: {
        flex: 1,
    },
});

export default BOLO;

