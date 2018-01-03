import React from 'react';
import {
    Button,
    ScrollView,
    Text
} from 'react-native';

export const NavScreen = ({navigation, banner}) => (
    <ScrollView>
        <Text>{banner}</Text>
        <Button
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('Photos', {name: 'Jane'})}
            title="Go to a photos screen"
        />
        <Button
            onPress={() => navigation.navigate('Login')}
            title="Go to a login screen"
        />
        <Button
            onPress={() => navigation.goBack(null)}
            title="Go back"
        />
    </ScrollView>
);