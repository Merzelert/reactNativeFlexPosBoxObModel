import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Test 02</Text>
            <Text style={styles.title}>Counter: {contador}</Text>
            {/*  todo string debe ir dentro de un Text */}
            <Fab
                title="+2"
                posittion="br"
                onPress={() => setContador(contador + 2)}
            />

            <Fab
                title="-2"
                posittion="bl"
                onPress={() => setContador(contador - 2)}
            />
            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    //Estilos
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#5856d6',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',//Para centrar el texto
        position: 'relative',//Para que el texto se pueda mover
        top: -15,//Para mover el texto hacia arriba
        color: 'white',
    },
});
