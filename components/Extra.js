import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function Extra({formData, setFormData}) {
  return (
    <>
    <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your hobbies' value={formData.hobbies}
        onChangeText={(hobbies) => {
        setFormData({...formData, hobbies})
      }}
      />
      </View>
      
      <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your activities' value={formData.activities}
        onChangeText={(activities) => {
        setFormData({...formData, activities})
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
