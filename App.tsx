import React from 'react';
import { SafeAreaView } from 'react-native';
// import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import Test02Screen from './src/screens/Test02Screen';
// import { ContadorScreen } from './src/screens/ContadorScreen';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {/* <Test02Screen /> */}
            {/* <ContadorScreen/> */}
            {/* <BoxObjectModelScreen/> */}
            {/* <DimensionesScreen/> */}
            {/* <PositionScreen/> */}
            {/* <FlexScreen/> */}
            <TareaScreen/>
        </SafeAreaView>
    );
};

export default App;
