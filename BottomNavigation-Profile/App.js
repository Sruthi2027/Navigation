import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import aboutmescreen from './screens/aboutmescreen';
import reachmeescreen from './screens/reachmeescreen';
import homescreen from './screens/homescreen';
import infoscreen from './screens/infoscreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const taskStack1 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "Home" component={homescreen} />
  </Stack.Navigator>  
  );
}; 

const taskStack2 = () => {
  return(
  <Stack.Navigator>
     <Stack.Screen name = "About me" component={aboutmescreen} />
  </Stack.Navigator>  
  );
};

const taskStack3 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "Info" component={infoscreen} />
  </Stack.Navigator>  
  );
};

const taskStack4 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "Reach Me " component={reachmeescreen} /> 
  </Stack.Navigator>  
  );
};

const TabNavigator1 = () => {
  return(
  <Tab.Navigator>
    <Tab.Screen 
      name = "Home"
      component={taskStack1}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name="md-home"
            size={focused ? 26 : 20}
            color={color}
          />
        ),
      }}
        />

     <Tab.Screen 
      name = "About Me"
      component={taskStack2}
      options={{
        tabBarLabel: "About Me",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name="md-pin"
            size={focused ? 26 : 20}
            color={color}
          />

          ),
        }}
        />  

          <Tab.Screen 
          name = "Info"
          component={taskStack3}
          options={{
            tabBarLabel: "Info",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name="md-information-circle-outline"
                size={focused ? 26 : 20}
                color={color}
              />
              ),
            }}
            />


              <Tab.Screen 
              name = "Reach Me"
              component={taskStack4}
              options={{
                tabBarLabel: "Reach Me",
                tabBarIcon: ({ focused, color }) => (
                  <Ionicons
                    name="md-headset"
                    size={focused ? 26 : 20}
                    color={color}
                  />

                  ),
            }}
            />
  </Tab.Navigator>
  );
}

export default function App() {
  return (
   <NavigationContainer>
     <TabNavigator1 />
   </NavigationContainer>
   
  );
}