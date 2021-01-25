import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionButton from './components/ActionButton';
import OperatorButton from './components/OperatorButton';

export default function App() {

  const [operation, setOperation] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.upperContainer}>
        <Text style={styles.displayText}>{operation}</Text>
      </View>

      <View style={styles.lowerContainer}>

        <View style={styles.row}>
          <OperatorButton operator="Math.E" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} slim />
          
          <OperatorButton operator="Math.PI" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} slim />

          <OperatorButton operator="." setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} slim />

          <OperatorButton operator="%" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} slim />
        </View>

        <View style={styles.row}>
          <OperatorButton operator="7" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />
          
          <OperatorButton operator="8" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="9" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="/" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} special />
        </View>

        <View style={styles.row}>
          <OperatorButton operator="4" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />
          
          <OperatorButton operator="5" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="6" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="*" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} special />
        </View>

        <View style={styles.row}>
          <OperatorButton operator="1" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />
          
          <OperatorButton operator="2" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="3" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="-" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} special />
        </View>

        <View style={styles.row}>
          <OperatorButton operator="0" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />
          
          <OperatorButton operator="(" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator=")" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} />

          <OperatorButton operator="+" setOperation={(newOp) => {
            setOperation(`${operation}${newOp}`)
          }} special />
        </View>

        <View style={styles.row}>

          <ActionButton operation={operation} title="DEL" setOperation={() => {
            try {
              setOperation(operation.slice(0, -1));
            }
            catch (e) {
              setOperation(`${e}`);
            }
          }} special />

          <ActionButton operation={operation} title="AC" setOperation={() => {
            setOperation("");
          }} special />

          <ActionButton operation={operation} title="CALCULATE" setOperation={() => {
            try {
              setOperation(eval(operation));
            }
            catch (e) {
              setOperation(`${e}`);
            }
          }} />
        </View>
          
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f9',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  displayText: {
    fontSize: 50,
  },
  upperContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  lowerContainer: {
    flex: 2,
  },
});