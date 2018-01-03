import React from 'react';
import {NavScreen} from '../rootNav';
import {
    Button
} from 'react-native';

export const ProfileScreen = ({navigation}) => (
    <NavScreen
        banner={
            `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${navigation.state.params.name}'s Profile`
        }
        navigation={navigation}
    />
);

ProfileScreen.navigationOptions = props => {
    const {navigation} = props;
    const {state, setParams} = navigation;
    const {params} = state;
    return {
        headerTitle: `${params.name}'s Profile!`,
        // Render a button on the right side of the header.  
        // When pressed switches the screen to edit mode.  
        headerRight: (
            <Button
                title={params.mode === 'edit' ? 'Done' : 'Edit'}
                onPress={() => setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
            />
        ),
    };
};