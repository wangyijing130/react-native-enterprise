import React, {Component} from 'react';
import {View, Button, TextInput} from "react-native";
export class LoginComponent extends Component {
    username = '';
    password = '';
    static navigationOptions = ({navigation}) => ({
        title: 'login'
    });

    doLogin(navigate) {
        navigate.goBack(null);
    }

    render() {
        let navigate = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <TextInput style={{width: 50, height: 50}}
                           placeholder="username"
                           onChangeText={(text) => this.username = text}
                />
                <TextInput style={{width: 50, height: 50}}
                           placeholder="password"
                           onChangeText={(text) => this.password = text}
                />
                <Button style={{width: 50, height: 50}} title='Login' onPress={() => this.doLogin(navigate)}/>
            </View>
        );
    }
}