import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,//flex: 1 es para que el componente ocupe todo el espacio disponible
        backgroundColor: 'black',
    },
    title: {
        color: 'white',//color: 'white' es para cambiar el color del texto
        padding: 15,//padding: 15 es para cambiar el tamaño del padding
        textAlign: 'center',//textAlign: 'center' es para centrar el texto
        backgroundColor: 'blue',//backgroundColor: 'blue' es para cambiar el color de fondo
        fontSize: 25,//fontSize: 25 es para cambiar el tamaño de la fuente
        borderWidth: 2,//borderWidth: 2 es para cambiar el tamaño del borde
        borderColor: 'white',//borderColor: 'white' es para cambiar el color del borde
        borderRadius: 100,//borderRadius: 100 es para cambiar el radio de las esquinas
        margin: 20,//margin: 20 es para cambiar el tamaño del margen
    },
});
