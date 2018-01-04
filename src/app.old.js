import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import LoginPage from './login/loginPage'
import MainPage from './main/mainPage'

const App = StackNavigator({
    Login: {screen: LoginPage},
    Main: {screen: MainPage}
});
export default App