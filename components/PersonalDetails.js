import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function PersonalDetails({formData, setFormData}) {
  return (
    <>
    <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your age' value={formData.age}
        onChangeText={(age) => {
        setFormData({...formData, age})
      }}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your designation' value={formData.designation}
        onChangeText={(designation) => {
        setFormData({...formData, designation})
      }}
      />
      </View>
      <View style={styles.inputView}>
      <TextInput style={styles.textInput}
        placeholderTextColor='gray'
        placeholder='Enter your company' value={formData.company}
        onChangeText={(company) => {
        setFormData({...formData, company})
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
