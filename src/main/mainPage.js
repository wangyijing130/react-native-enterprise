import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {THEME_BACKGROUND} from '../css/color';
import {getDefautNavOps} from '../common/globel';

// 清空导航记录，跳转到登录页
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Login'})
    ]
});

class MainPage extends Component {
    static navigationOptions = getDefautNavOps('首页');

    logout() {
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const {user} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>欢迎使用本产品！</Text>
                <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
                    <View>
                        <Text>退出登录
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
)(MainPage)