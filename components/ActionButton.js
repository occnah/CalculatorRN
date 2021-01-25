import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ActionButton(props) {
    return (
      <TouchableOpacity style={props.special ? styles.specialButton : styles.calcButton} onPress={() => {
        props.setOperation(props.operation)
      }}>
        <Text style={props.special ? styles.specialBtnText : styles.text}>{props.title}</Text>
      </TouchableOpacity>
    );
}

const baseButton = {
  height: 80,
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
};

const baseText = {
  fontWeight: 'bold',
    fontSize: 18,
};

const styles = StyleSheet.create({
  calcButton: {
    width: 180,
    backgroundColor: '#2ec973',
    ...baseButton,
  },
  specialButton: {
    width: 90,
    backgroundColor: '#f8eced',
    ...baseButton,
  },
  text: {
    color: 'white',
    ...baseText,
  },
  specialBtnText: {
    color: '#f54650',
    ...baseText,
  },
});