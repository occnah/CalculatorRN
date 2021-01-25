import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function OperatorButton(props) {
    return (
      <TouchableOpacity style={props.slim ? styles.slimBtn : (props.special ? styles.specialBtn : styles.button)} onPress={() => {
        props.setOperation(props.operator);
      }}>
        <Text style={props.slim ? styles.slimBtnText : (props.special ? styles.specialText : styles.text)}>{props.operator}</Text>
      </TouchableOpacity>
    );
}

const baseButton = {
  width: 80,
  height: 80,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  margin: 10,
};

const baseText = {
  fontWeight: 'bold',
  fontSize: 20,
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#e9f0f4',
      ...baseButton,
    },
    specialBtn: {
      backgroundColor: '#ff9500',
      ...baseButton,
    },
    text: {
      color: 'black',
      ...baseText,
    },
    specialText: {
      color: 'white',
      ...baseText,
    },
    slimBtn: {
      ...baseButton,
      backgroundColor: '#e9f0f4',
      height: 50,
      borderRadius: 20,
    },
    slimBtnText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
});