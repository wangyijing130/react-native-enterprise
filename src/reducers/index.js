'use strict';

import {combineReducers} from 'redux';
import loginIn from './loginReducer';
import reg from './regReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
    reg: reg
});

export default rootReducer;