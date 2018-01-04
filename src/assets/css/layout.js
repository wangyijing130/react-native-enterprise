import React from 'react';
import {StyleSheet} from 'react-native';
import {THEME} from './color';
export const defaultStyles = StyleSheet.create({
    Button: {
        elevation: 4,
        backgroundColor: THEME,
        borderRadius: 2
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
    }
});