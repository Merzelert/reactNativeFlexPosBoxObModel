import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaVerde}/>
            <View style={styles.cajaNegra}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 200,
        // height: 300,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: '#4B7F16',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    cajaNegra: {
        width: 100,
        height: 100,
        backgroundColor: '#000',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 10,
        left: 10,
    },
});
