import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../assets/css/color';
import PropTypes from 'prop-types';

export default class CButton extends Component {
    static propTypes = {
        style: PropTypes.number,
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    render() {
        const {title, onPress, style} = this.props;
        return (
            <TouchableOpacity style={[styles.Button, style]} onPress={onPress}>
                <Text style={styles.ButtonText}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Button: {
        elevation: 4,
        backgroundColor: THEME,
        borderRadius: 2
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
        fontWeight: '500',
    }
});