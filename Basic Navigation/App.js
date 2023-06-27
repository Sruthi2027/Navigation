import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import fromnavigation from "./Navigationscreens/fromnavigation";
import tonavigation from "./Navigationscreens/tonavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="fromnavigation" component={fromnavigation} />
        <Stack.Screen name="tonavigation" component={tonavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



