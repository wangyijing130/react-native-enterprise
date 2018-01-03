import React from 'react';
import {NavScreen} from '../rootNav';

export const PhotosScreen = ({navigation}) => (
    <NavScreen
        banner={`${navigation.state.params.name}'s Photos`}
        navigation={navigation}
    />
);
PhotosScreen.navigationOptions = {
    title: 'Photos',
};