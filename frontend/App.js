import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import CasesPage from './pages/CasesPage';  
import EvidencePage from './pages/EvidencePage';  
import UploadPage from './pages/UploadPage';  
import BOLO from './pages/BOLO';
import ContactHistory from './pages/ContactHistory';
import TrespassRecords from './pages/TrespassRecords';
import WantedRecords from './pages/WantedRecords';
import SearchCasePage from './pages/SearchCasePage'; 
import CreateCasePage from './pages/CreateCasePage';


import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'home';
          } else if (route.name === 'Cases') {
            iconName = 'briefcase';
          } else if (route.name === 'Evidence') {
            iconName = 'folder';
          } else if (route.name === 'Upload') {
            iconName = 'upload';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#94ADC7',
        tabBarStyle: {
        backgroundColor: '#121A21',
        borderTopWidth: 0,
        },

      })}
    >
      <Tab.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
      <Tab.Screen name="Cases" component={CasesPage}  options={{ headerShown: false }}/>
      <Tab.Screen name="Evidence" component={EvidencePage} options={{ headerShown: false }}/>
      <Tab.Screen name="Upload" component={UploadPage} options={{ headerShown: false }}/>

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="BOLO" component={BOLO} options={{ headerShown: false }} />
          <Stack.Screen name="ContactHistory" component={ContactHistory} options={{ headerShown: false }} />
          <Stack.Screen name="TrespassRecords" component={TrespassRecords} options={{ headerShown: false }} />
          <Stack.Screen name="WantedRecords" component={WantedRecords} options={{ headerShown: false }} />
          <Stack.Screen name="SearchCasePage" component={SearchCasePage} options={{ headerShown: false }} />
          <Stack.Screen name="CreateCasePage" component={CreateCasePage} options={{ headerShown: false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 30,
    color: 'white',
    marginLeft: 150
  },
  Title1: {
    color: '#94ADC7',
    fontSize: 20
  },
});