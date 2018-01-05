import React from 'react';
import {StackNavigator} from 'react-navigation'; // 路由导航
import {FindAccountPage} from './login/findAccountPage';
import LoginPage from './login/loginPage';
import RegPage from './login/regPage';
import {MainNavigator} from './main/main'; // 主页面路由导航
import storage from './common/storage'; // 本地存储全局对象


const App = StackNavigator({
    Login: {screen: LoginPage}, // 登录页
    Reg: {screen: RegPage}, // 注册页
    FindAccount: {screen: FindAccountPage}, // 找回密码页
    Main: { // 主页面
        screen: MainNavigator, // tab导航配置
        navigationOptions: ({navigation}) => ({
            header: null // 去头部
        })
    }
}, {
    initialRouteName: 'Login', // 默认登录页
    headerMode: 'screen'
});
export default App;