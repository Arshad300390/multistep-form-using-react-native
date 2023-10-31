import { Appbar, FAB, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import * as React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;
const Footer = () => {
    const { bottom } = useSafeAreaInsets();
  return (
      <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: 'lightgreen',
        },
      ]}
      >
        <Appbar.Action icon="archive" onPress={() => {}} />
      <Appbar.Action icon="email" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
          <Appbar.Action icon="delete" onPress={() => { }} />
          <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => {}}
        style={[
          styles.fab,
            {
                top: -20,
                left: 80,
                borderRadius: MEDIUM_FAB_HEIGHT / 2,
            },
        ]}
      />
    </Appbar>
  )
}

export default Footer

const styles = StyleSheet.create({
    bottom: {
      backgroundColor: 'aquamarine',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    fab: {
        backgroundColor: 'orange',
    }
    
  });