import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import * as loginAction from './loginAction';// 导入action方法
import {NavigationActions} from 'react-navigation';
import {THEME_BACKGROUND} from '../css/color';
import {getDefautNavOps} from '../common/globel';
import {defaultStyles} from '../css/layout';

// 清空导航记录，跳转到首页
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Main'})
    ]
});

class LoginPage extends Component {
    static navigationOptions = getDefautNavOps('登录');

    username = 'eking';
    password = '123456';

    // 状态更新，判断是否登录并作出处理
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction);
            return false;
        }
        return true;
    }

    render() {
        const {login} = this.props;
        return (
            <View style={styles.loginPage}>
                <Text>状态: {this.props.status}</Text>
                <TextInput style={styles.loginInput} placeholder='username'
                           value={this.username} autoCapitalize={'none'}
                           onChangeText={(text) => this.username = text}/>
                <TextInput style={styles.loginInput} placeholder='password' secureTextEntry={true}
                           value={this.password} autoCapitalize={'none'}
                           onChangeText={(text) => this.password = text}/>
                <TouchableOpacity style={defaultStyles.Button} onPress={() => login(this.username, this.password)}>
                    <Text style={defaultStyles.ButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    },
    loginInput: {
        marginBottom: 20
    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: (u, p) => dispatch(loginAction.login(u, p)),
    })
)(LoginPage)