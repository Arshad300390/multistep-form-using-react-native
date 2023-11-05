import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import BottomNavigationBar from './navigation/BottomNavigationBar';
import CountryPickerForm from './CountryPickerForm';
import DatePickerForm from './DatePickerForm';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <CountryPickerForm />
        <Text>Multi Step Form</Text>
        <DatePickerForm />
      </View>
      
        <BottomNavigationBar />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
