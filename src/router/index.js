import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { HomePage, Post, Profile, Reels, Shop } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Post" component={Post} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            {/* <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
