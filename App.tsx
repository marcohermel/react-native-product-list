import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import {
  createStackNavigator,
  createStackScreen,
} from '@react-navigation/stack';
import { DetailsScreen } from './src/details';
import { HomeScreen } from './src/home';

const MyStack = createStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: createStackScreen({
      screen: HomeScreen,
    }),
    Details: createStackScreen({
      screen: DetailsScreen,
    }),
  },
});

type MyStackType = typeof MyStack;

declare module '@react-navigation/core' {
  interface RootNavigator extends MyStackType {}
}

const Navigation = createStaticNavigation(MyStack);

export default function App() {
  return <Navigation />;
}