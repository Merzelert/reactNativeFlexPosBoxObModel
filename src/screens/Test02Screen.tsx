import React from 'react';
import { Text, View } from 'react-native';


const Test02Screen = () => { //Lo llamo Screen porque es una pantalla
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'skyblue',
        }}>
            <Text style={{
                fontSize: 45,
                textAlign: 'center',
            }}>Test 03</Text>
        </View>
    );
};

export default Test02Screen;
