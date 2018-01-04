'use strict';

import * as types from '../constants/loginTypes';

// 模拟用户信息
let user = {
    name: 'eking',
    nikeName: '羿璟',
    age: 30,
    pwd: '123456'
};

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login(username, password) {
    console.log('登录方法');
    return dispatch => {
        dispatch(isLogining());
        // 模拟用户登录
        if (username === user.name && password === user.pwd) {
            dispatch(loginSuccess(true, user));
        } else {
            dispatch(loginError(false));
        }
        /*let result = fetch('https://www.baidu.com/')
         .then((res) => {
         dispatch(loginSuccess(true, user));
         }).catch((e) => {
         dispatch(loginError(false));
         })*/
    }
}

function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}

export function reg(username, password) {
    console.log('注册方法');
    return dispatch => {
        dispatch(isReging());
        // 模拟用户登录
        if (username === user.name && password === user.pwd) {
            dispatch(regSuccess(true, user));
        } else {
            dispatch(regError(false));
        }
        /*let result = fetch('https://www.baidu.com/')
         .then((res) => {
         dispatch(loginSuccess(true, user));
         }).catch((e) => {
         dispatch(loginError(false));
         })*/
    }
}

function isReging() {
    return {
        type: types.REG_DOING
    }
}

function regSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.REG_DONE,
        user: user,
    }
}

function regError(isSuccess) {
    console.log('error');
    return {
        type: types.REG_ERROR,
    }
}