import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import * as loginAction from './loginAction';// 导入action方法
import {NavigationActions} from 'react-navigation';
import {THEME_BACKGROUND} from '../assets/css/color';
import CButton from '../common/button';

// 清空导航记录，跳转到首页
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Main'})
    ]
});

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    };


    username = 'eking';
    password = '123456';

    componentWillMount() {
        this.checkLogin();
    }

    checkLogin() {
        global.storage.load({
            key: 'user',
            autoSync: false,
        }).then(ret => {
            if (ret && ret.name) {
                // console.warn('用户已经登录：' + ret.name);
                this.props.navigation.dispatch(resetAction);
            }
        }).catch(err => {
            // console.warn(err.message);
        });
    }

    // 状态更新，判断是否登录并作出处理
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
            // this.props.navigation.dispatch(resetAction);
            this.checkLogin();
            return false;
        }
        return true;
    }

    doLogin() {
        const {login} = this.props;
        login(this.username, this.password);
    }

    doReg() {
        this.props.navigation.navigate('Reg');
    }

    render() {
        const {login} = this.props;
        return (
            <View style={styles.loginPage}>
                <TextInput style={styles.loginInput} placeholder='username' keyboardType={'numeric'}
                           defaultValue={this.username} autoCapitalize={'none'} maxLength={20}
                           onChangeText={(text) => this.username = text}/>
                <TextInput style={styles.loginInput} placeholder='password' secureTextEntry={true}
                           defaultValue={this.password} autoCapitalize={'none'} maxLength={20}
                           onChangeText={(text) => this.password = text}/>
                <CButton style={styles.loginInput} title={'登录'} onPress={() => this.doLogin()}/>
                <CButton style={styles.loginInput} title={'注册'} onPress={() => this.doReg()}/>
                <Text>状态: {this.props.status}</Text>
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