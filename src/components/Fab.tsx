import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {//Interface para definir los tipos de las propiedades del componente (Props)
    title: string;
    posittion?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, onPress, posittion = 'br' }: Props) => {// Fab = Floating Action Button
    //posittion?: 'br' | 'bl' -> Significa que la propiedad es opcional y que solo puede ser 'br' o 'bl'
    //posittion = 'br' -> Significa que si no se envia la propiedad posittion, por defecto sera 'br'
    //onPress: () => void -> Significa que la propiedad onPress debe ser una funcion que no recibe ningun parametro y no retorna nada
    //title: string -> Significa que la propiedad title debe ser un string

    const ios = () => {//Funcion para IOS
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={[
                    styles.fabLocation,
                    (posittion === 'bl') ? styles.left : styles.right,
                ]}
                >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
                </TouchableOpacity>
        );
    };

    const android = () => {//Funcion para Android
        return (
            <View
                style={[
                    styles.fabLocation,
                    (posittion === 'bl') ? styles.left : styles.right,
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('black', false, 26)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return Platform.OS === 'ios' ? ios() : android();//Si el SO es IOS, se ejecuta la funcion ios(), si no, se ejecuta la funcion android()
};

const styles = StyleSheet.create({
    //Estilos
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: '#00cccc',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
