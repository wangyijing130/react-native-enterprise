import React from 'react';
import {TabNavigator} from 'react-navigation';
import {THEME} from '../assets/css/color';
import MessagePage from './messagePage';
import ContactPage from './contactPage';
import GamePage from './gamePage';
import PersonPage from './personPage';

export const MainNavigator = TabNavigator({
        Message: {screen: MessagePage},
        Contact: {screen: ContactPage},
        Game: {screen: GamePage},
        Person: {screen: PersonPage}
    }, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'white',
            style: {
                backgroundColor: THEME,
            },
            tabStyle: {
                paddingTop: 8,
                paddingBottom: 4,
            },
            labelStyle: {
                marginTop: 0,
                marginBottom: 0
            },
            showIcon: true
        }
    }
);