import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import * as loginAction from './loginAction';// 导入action方法
import {NavigationActions} from 'react-navigation';
import {THEME, THEME_BACKGROUND} from '../assets/css/color';
import {DefaultStackNavigator} from '../common/globel';
import {defaultStyles} from '../assets/css/layout';

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

    // 状态更新，判断是否登录并作出处理
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
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

    /* <View style={styles.header}>
     <Text style={styles.headerTitle}>注册</Text>
     </View>*/
    render() {
        return (
            <View style={styles.regPage}>
                <View style={styles.container}>
                    <Text>状态: {this.props.status}</Text>
                    <TextInput style={styles.regInput} placeholder='手机号码' keyboardType={'numeric'}
                               autoCapitalize={'none'} maxLength={20}
                               onChangeText={(text) => this.username = text}/>
                    <TextInput style={styles.regInput} placeholder='密码' secureTextEntry={true}
                               autoCapitalize={'none'} maxLength={20}
                               onChangeText={(text) => this.password = text}/>
                    <TextInput style={styles.regInput} placeholder='确认密码' secureTextEntry={true}
                               autoCapitalize={'none'} maxLength={20}
                               onChangeText={(text) => this.password2 = text}/>
                    <TouchableOpacity style={[defaultStyles.Button, styles.regInput]} onPress={() => this.doReg()}>
                        <Text style={defaultStyles.ButtonText}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[defaultStyles.Button, styles.regInput]} onPress={() => this.goBack()}>
                        <Text style={defaultStyles.ButtonText}>返回</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    regPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: THEME_BACKGROUND
    },
    header: {
        flexBasis: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        backgroundColor: THEME
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
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
        reg: (u, p) => dispatch(loginAction.reg(u, p)),
    })
)(RegPage)