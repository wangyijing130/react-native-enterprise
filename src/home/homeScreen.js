import React from 'react';
import {NavScreen} from '../rootNav';
export const HomeScreen = ({navigation}) => (
    <NavScreen
        banner="Home Screen"
        navigation={navigation}
    />
);
HomeScreen.navigationOptions = {
    title: 'Welcome',
};