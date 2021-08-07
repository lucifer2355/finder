import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='HomeNavigator' component={HomeScreen} />
    </Stack.Navigator>
);

export default HomeNavigator