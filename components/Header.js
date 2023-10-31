import { View, Text } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const Header = () => {
    return (
        <Appbar.Header style={{backgroundColor:'purple'}} >
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title="Home" />
            <Appbar.Action icon="home" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { alert('work in progress')}} />
        </Appbar.Header>
    )
}

export default Header