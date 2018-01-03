import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import * as loginAction from './loginAction';// 导入action方法
import {NavigationActions} from 'react-navigation';

// 清空导航记录，跳转到首页
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Main'})
    ]
});

class LoginPage extends Component {
    static navigationOptions = {
        title: '登录',
    };
    username = '';
    password = '';

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
                <TextInput style={styles.loginInput} placeholder="username"
                           onChangeText={(text) => this.username = text}/>
                <TextInput style={styles.loginInput} placeholder="password"
                           onChangeText={(text) => this.password = text}/>
                <Button style={styles.loginInput} title='Login' onPress={() => login(this.username, this.password)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
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