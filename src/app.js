import React from 'react';
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import LoginPage from './login/loginPage';
import RegPage from './login/regPage';
import MessagePage from './main/messagePage';
import ContactPage from './main/contactPage';
import GamePage from './main/gamePage';
import PersonPage from './main/personPage';
import {THEME} from "./assets/css/color";

const MainNavigator = TabNavigator({
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
const App = StackNavigator({
    Login: {screen: LoginPage},
    Reg: {screen: RegPage},
    Main: {
        screen: MainNavigator,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
}, {
    initialRouteName: 'Login',
    headerMode: 'screen'
});
export default App;