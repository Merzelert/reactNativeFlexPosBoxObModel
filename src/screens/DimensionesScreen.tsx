import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');//Obtiene las dimensiones de la pantalla

export const DimensionesScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.50}} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text>W: {width}, H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    cajaMorada: {
        height: '50%',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: '50%',
        height: '50%',
        backgroundColor: 'green',
    },
});
