import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import LinkIcon from "../components/LinkIcon";
import Screen from "../components/Screen";
import colors from "../config/colors";

const quickLinks = [
  { id: 1, label: "Wallet Topup", value: "Wallet Topup", icon: "" },
  { id: 2, label: "Coronoavirus Insurance", value: "Coronoavirus Insurance" },
  { id: 3, label: "Buy Gold", value: "Buy Gold" },
  { id: 4, label: "Liquid Funds", value: "Liquid Funds" },
  { id: 5, label: "Accident Insurance", value: "Accident Insurance" },
  { id: 6, label: "Food Delivery", value: "Food Delivery" },
  { id: 7, label: "Play Games", value: "Play Games" },
  { id: 8, label: "Book a cylinder", value: "Book a cylinder" },
];

const HomeScreen = () => {
  return (
    <Screen>
      <Text>HomeScreen</Text>
      <FlatList
        style={styles.quickLinks}
        data={quickLinks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        renderItem={({ item }) => <LinkIcon label={item.label} />}
      />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  quickLinks: {
    backgroundColor: colors.white,
  },
});
