import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavScreen} from '../rootNav';
export class HomeComponent extends Component {

    render() {
        let navigation = this.props.navigation;
        return (
            <View>
                <Text>首页</Text>
                <Text>测试路由</Text>
                <NavScreen
                    banner="Home Screen"
                    navigation={navigation}
                />
            </View>
        );
    }
}