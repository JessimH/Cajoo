import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from '../features/landing/landing.screen'
import Login from '../features/login/login.screen'
import Phone from '../features/phone/phone.screen'
import Confirm from '../features/confirm/confirm.screen'

const Stack = createNativeStackNavigator();

const rootContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="landing"
                    component={Landing}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                />
                <Stack.Screen
                    name="phone"
                    component={Phone}
                />
                <Stack.Screen
                    name="confirm"
                    component={Confirm}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default rootContainer;
