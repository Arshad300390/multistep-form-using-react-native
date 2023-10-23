import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function Signup({formData, setFormData}) {
  return (
    <>
    <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your name' value={formData.name}
        onChangeText={(name) => {
        setFormData({...formData, name})
      }}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your email' value={formData.email}
        onChangeText={(email) => {
        setFormData({...formData, email})
      }}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your password' value={formData.password}
        onChangeText={(password) => {
        setFormData({...formData, password})
      }}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='confirm password' value={formData.cpassword}
        onChangeText={(cpassword) => {
        setFormData({...formData, cpassword})
      }}
      />
      </View>
      </>
  )
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#ffc0cb',
    borderRadius: 15,
    width: 170,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textInput: {
    height: 250,
    flex: 1,
    padding: 10,



  }
})
