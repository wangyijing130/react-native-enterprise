import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {THEME, THEME_BACKGROUND} from '../assets/css/color';
import CButton from '../common/button';

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
    componentWillMount() {
        this.checkLogin();
    }

    // 状态更新，判断是否登录并作出处理
    shouldComponentUpdate(nextProps, nextState) {
        console.warn('状态更新');
        // 登录完成,切成功登录
        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
            // this.props.navigation.dispatch(resetAction);
            this.checkLogin();
            return false;
        }
        return true;
    }

    checkLogin() {
        global.storage.load({
            key: 'user',
            autoSync: false,
        }).then(ret => {
            if (!ret || !ret.name) {
                this.props.navigation.dispatch(resetAction);
            }
        }).catch(err => {
            // console.warn(err.message);
        });
    }

    logout() {
        global.storage.remove({key: 'user'});
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>您好,{this.props.user && this.props.user.nikeName }!</Text>
                <Text>欢迎使用本产品！</Text>
                <CButton title={'注销'} onPress={() => this.logout()}/>
                <Text>状态: {this.props.status}</Text>
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
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user
    }),
    (dispatch) => ({})
)(PersonPage)