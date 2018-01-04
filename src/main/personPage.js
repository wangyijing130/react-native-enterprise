import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {THEME, THEME_BACKGROUND} from '../assets/css/color';
import {DefaultStackNavigator} from '../common/globel';

// 清空导航记录，跳转到登录页
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Login'})
    ]
});

class PersonPage extends Component {
    static navigationOptions = {
       tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/images/person.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    logout() {
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const {user} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>您好,{user}!</Text>
                <Text>欢迎使用本产品！</Text>
                <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
                    <View>
                        <Text>退出登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    }
});

export default connect(
    (state) => ({
        user: state.user
    }),
    (dispatch) => ({})
)(PersonPage)