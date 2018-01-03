import React from 'react';

import {
    StackNavigator,
} from 'react-navigation';
import {HomeComponent} from './src/home/homeComponent';
import {LoginComponent} from './src/login/loginComponent';
import {PhotosScreen} from './src/photo/photoScreen';
import {ProfileScreen} from './src/profile/profileScreen';


const SimpleStack = StackNavigator(
    {
        Home: {
            screen: HomeComponent,
        },
        Profile: {
            path: 'people/:name',
            screen: ProfileScreen,
        },
        Photos: {
            path: 'photos/:name',
            screen: PhotosScreen,
        },
        Login: {
            path: 'login',
            screen: LoginComponent,
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default SimpleStack; 