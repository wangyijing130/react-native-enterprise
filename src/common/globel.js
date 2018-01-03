import React from 'react';
import {THEME} from '../css/color';
export function getDefautNavOps(title) {
    return {
        title: title || '',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: THEME
        }
    }
}