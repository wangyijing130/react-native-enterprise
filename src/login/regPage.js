import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux'; // 引入connect函数
import * as registerAction from './registerAction';// 导入action方法
import {THEME, THEME_BACKGROUND} from '../assets/css/color';
import {DefaultStackNavigator} from '../common/stackNavigator';
import CButton from '../common/button';

// 清空导航记录，跳转到首页
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Login'})
    ]
});

class RegPage extends Component {
    static navigationOptions = DefaultStackNavigator('注册');
    username = '';
    password = '';
    password2 = '';

    // 状态更新
    shouldComponentUpdate(nextProps, nextState) {
        // 注册成功,切到登录
        if (nextProps.status === '注册成功' && nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction);
            return false;
        }
        return true;
    }

    doReg() {
        const {reg} = this.props;
        if (!this.username) {
            Alert.alert(
                '错误',
                '请输入用户名',
            );
            return;
        }
        if (!this.password) {
            return;
        }
        if (!this.password2) {
            return;
        }
        if (this.password !== this.password2) {
            return;
        }
        reg(this.username, this.password);
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.regPage}>
                <TextInput style={styles.regInput} placeholder='手机号码' keyboardType={'numeric'}
                           autoCapitalize={'none'} maxLength={20}
                           onChangeText={(text) => this.username = text}/>
                <TextInput style={styles.regInput} placeholder='密码' secureTextEntry={true}
                           autoCapitalize={'none'} maxLength={20}
                           onChangeText={(text) => this.password = text}/>
                <TextInput style={styles.regInput} placeholder='确认密码' secureTextEntry={true}
                           autoCapitalize={'none'} maxLength={20}
                           onChangeText={(text) => this.password2 = text}/>
                <CButton style={styles.regInput} title={'注册'} onPress={() => this.doReg()}/>

                <Text>状态: {this.props.status}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    regPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    },
    regInput: {
        marginBottom: 20
    }
});

export default connect(
    (state) => ({
        status: state.reg.status,
        isSuccess: state.reg.isSuccess
    }),
    (dispatch) => ({
        reg: (u, p) => dispatch(registerAction.reg(u, p)),
    })
)(RegPage)