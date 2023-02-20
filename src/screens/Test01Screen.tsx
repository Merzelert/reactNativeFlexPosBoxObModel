/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';


const Test01Screen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'skyblue',
        }}>
            <Text style={{
                fontSize: 45,
                textAlign: 'center',
            }}>Test 01</Text>
        </View>
    );
};

export default Test01Screen;
