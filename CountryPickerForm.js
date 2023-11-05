import React, { useState } from 'react';
import { TextInput, } from 'react-native-paper';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
export default function CountryPickerForm() {
    const [country, setCountry] = useState(null);
    const [countryPickerVisible, setCountryPickerVisible] = useState(false);

    const onCountrySelect = (selectedCountry) => {
        setCountry(selectedCountry);
        setCountryPickerVisible(false);
    };

    const toggleCountryPicker = () => {
        setCountryPickerVisible(!countryPickerVisible);
    };
    
    return (
        <View>
            <TouchableOpacity onPress={toggleCountryPicker} style={{ padding: 10, height: 50 }}>
                <TextInput
                    mode='outlined' label='country'
                    value={country ? `${country.name}` : ''}
                    placeholder="Select Country"
                    editable={false}
                    style={{ flex: 1, fontSize: 10, justifyContent: 'center', textAlign: 'center' }}
                    right={<TextInput.Icon icon="chevron-down" size={10} />}
                /></TouchableOpacity>
            {countryPickerVisible && (
                <CountryPicker
                    withFilter
                    withFlag
                    withCountryNameButton
                    withAlphaFilter
                    withCallingCode
                    withCurrency
                    withEmoji
                    onSelect={onCountrySelect}
                    visible={countryPickerVisible}
                    onOpen={toggleCountryPicker}
                    onClose={toggleCountryPicker}
                />)
            }

        </View>
    );
}
