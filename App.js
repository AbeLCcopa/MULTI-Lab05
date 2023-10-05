import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SettingsScreen from './Screens/SettingsScreen';
import OtherScreen1 from './Screens/OtherScreen1';
import OtherScreen2 from './Screens/OtherScreen2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const OtherStack1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Other1"
        component={OtherScreen1}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const OtherStack2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Other2"
        component={OtherScreen2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } else if (route.name === 'Other1') {
              iconName = 'ios-apps';
            } else if (route.name === 'Other2') {
              iconName = 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
        <Tab.Screen name="Other1" component={OtherStack1} />
        <Tab.Screen name="Other2" component={OtherStack2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
