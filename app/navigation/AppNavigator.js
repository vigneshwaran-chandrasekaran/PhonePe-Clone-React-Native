import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  HistoryScreen,
  HomeScreen,
  MyMoneyScreen,
  StoresScreen,
  SwitchScreen,
} from "../screens/";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <View>
      <Text>AppNavigator</Text>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stores" component={StoresScreen} />
        <Tab.Screen name="Switch" component={SwitchScreen} />
        <Tab.Screen name="MyMoney" component={MyMoneyScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
