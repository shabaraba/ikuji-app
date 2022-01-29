import React from 'react';
import { RootTabScreenProps } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { Text, View } from '../components/Themed';

// import Memory from '../screens/MemoryScreen';
import MemoryCalendar from '../screens/MemoryCalendarScreen';


//HomeとDetailをStackNavigatorとして構成する
const Stack = createNativeStackNavigator();

export default function TabThreeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Calendar">
                <Stack.Screen
                    name="Calendar"
                    component={MemoryCalendar}
                    options={{ title: 'Welcome' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
