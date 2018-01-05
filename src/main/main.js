import React from 'react';
import {TabNavigator} from 'react-navigation';
import {THEME} from '../assets/css/color';
import MessagePage from './messagePage';
import ContactPage from './contactPage';
import GamePage from './gamePage';
import PersonPage from './personPage';

export const MainNavigator = TabNavigator({
        Message: {screen: MessagePage}, // 留言
        Contact: {screen: ContactPage}, // 通讯录
        Game: {screen: GamePage}, // 游戏
        Person: {screen: PersonPage} // 个人中心
    }, {
        tabBarPosition: 'bottom', // 标签显示在底部
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
            showIcon: true  // 显示图标
        }
    }
);