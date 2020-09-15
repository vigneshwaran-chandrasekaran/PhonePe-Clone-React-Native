import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

const quickLinks = [
  { id: 1, label: "Wallet Topup", value: "Wallet Topup" },
  { id: 2, label: "Coronoavirus Insurance", value: "Coronoavirus Insurance" },
  { id: 3, label: "Buy Gold", value: "Buy Gold" },
  { id: 4, label: "Liquid Funds", value: "Liquid Funds" },
  { id: 5, label: "Accident Insurance", value: "Accident Insurance" },
  { id: 6, label: "Food Delivery", value: "Food Delivery" },
  { id: 7, label: "Play Games", value: "Play Games" },
  { id: 8, label: "Book a cylinder", value: "Book a cylinder" },
];

const HistoryScreen = () => {
  return (
    <Screen>
      <Text>HistoryScreen</Text>
      <FlatList
        data={quickLinks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <Text>{item.label}</Text>}
      />
      <Text>HistoryScreen</Text>
    </Screen>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
