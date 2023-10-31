import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import Extra from './Extra';
import PersonalDetails from './PersonalDetails';
import Signup from './Signup';

function Form() {
    const [formData, setFormData] = useState({
        //signup
        name: '',
        email: '',
        password: '',
        cpassword: '',
        //Personal details
        age: '',
        designation: '',
        company: '',
        //Extras
        hobbies: '',
        activities: '',

    });
    const [screen, setScreen] = useState(0)
    const FormTitle = [
        'Sign Up',
        'Personal Details',
        'Extras',
    ];
    const ScreenDisplay = () => {
        if (screen === 0) {
            return <Signup formData={formData} setFormData={setFormData} />
        } else if (screen === 1) {
            return <PersonalDetails formData={formData} setFormData={setFormData} />
        } else {
            return <Extra formData={formData} setFormData={setFormData} />
        }
    }
    return (
        <View style={styles.outerBorder}>
            <View style={styles.wrapper}>
                <Text style={{ fontSize: 32, color: '#003f5c' }}>{FormTitle[screen]}</Text>
                <View>
                    {ScreenDisplay()}
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {/* <Pressable disabled={screen === 0} onPress={() => {
                    setScreen((currScreen) => currScreen - 1)
                }}>
                    <Text style={screen === 0 ? [styles.button, styles.buttonDull] : styles.button}>Prev</Text>
                </Pressable> */}
                <Button
                    mode="contained" // You can customize the mode as per your requirements
                    disabled={screen === 0}
                    onPress={() => {
                        setScreen((currScreen) => currScreen - 1);
                    }}
                >
                    Prev
                </Button>
                <Button
                    mode="contained" // You can customize the mode as per your requirements
                    onPress={() => {
                        if (screen === FormTitle.length - 1) {
                            console.log(formData);
                        } else {
                            setScreen((currScreen) => currScreen + 1);
                        }
                    }}
                >
                    {screen === FormTitle.length - 1 ? 'Submit' : 'Next'}
                </Button>

            </View>



        </View>

    )
}
const styles = StyleSheet.create({
    outerBorder: {
        borderWidth: 5,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ffc0cb',
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {

        color: '#003f5c',
        // backgroundColor: '#ffc0cb',
        paddingVertical: 5,
        paddingHorizontal: 30,
        margin: 20,
        textAlign: 'center',

    },
    buttonDull: {
        color: '#7e8f96',
    }
})
export default Form